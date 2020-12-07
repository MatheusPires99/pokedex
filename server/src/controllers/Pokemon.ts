import { Request, Response } from 'express';

import {
  capitalizeFirstLetter,
  getPokemonIdByUrl,
  getPokemonImageById,
} from '../utils';
import { Pokemon, PokemonApiResult, PokemonSpecie } from '../types';
import pokeApi from '../services/pokeApi';

export default class PokemonController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { offset, limit } = request.query;

    const apiResponse = await pokeApi.get<PokemonApiResult>('/pokemon', {
      params: {
        offset: offset || 0,
        limit: limit || 18,
      },
    });

    const { results } = apiResponse.data;

    const pokemons = results.map(async pokemon => {
      const pokemonId = getPokemonIdByUrl(pokemon.url);

      const { data: pokemonData } = await pokeApi.get<Pokemon>(
        `/pokemon/${pokemonId}`,
      );
      const { data: pokemonSpecieData } = await pokeApi.get<PokemonSpecie>(
        `/pokemon-species/${pokemonId}`,
      );

      const pokemonNameIndex = pokemonSpecieData.names.findIndex(
        name => name.language.name === 'en',
      );

      const pokemonFlavorTextIndex = pokemonSpecieData.flavor_text_entries.findIndex(
        text => text.version.name === 'ruby',
      );

      const pokemonGeneraIndex = pokemonSpecieData.genera.findIndex(
        genera => genera.language.name === 'en',
      );

      const pokemonTypesFormatted = pokemonData.types.map(({ type }) => {
        return {
          name: capitalizeFirstLetter(type.name),
          url: type.url,
        };
      });

      const pokemonStatsFormatted = pokemonData.stats.map(stat => {
        let name = '';

        if (stat.stat.name === 'hp') {
          name = 'HP';
        } else if (stat.stat.name === 'attack') {
          name = 'Attack';
        } else if (stat.stat.name === 'defense') {
          name = 'Defense';
        } else if (stat.stat.name === 'special-attack') {
          name = 'Sp. Atk';
        } else if (stat.stat.name === 'special-defense') {
          name = 'Sp. Def';
        } else if (stat.stat.name === 'speed') {
          name = 'Speed';
        }

        return {
          base_stat: stat.base_stat,
          name,
          url: stat.stat.url,
        };
      });

      const pokemonAbilityFormatted = pokemonData.abilities.map(
        ({ ability }) => {
          return {
            name: capitalizeFirstLetter(ability.name),
            url: ability.url,
          };
        },
      );

      const eggGroupsFormatted = pokemonSpecieData.egg_groups.map(egg_group => {
        return {
          name: capitalizeFirstLetter(egg_group.name),
          url: egg_group.url,
        };
      });

      return {
        id: pokemonData.id,
        name: pokemonSpecieData.names[pokemonNameIndex].name,
        description:
          pokemonSpecieData.flavor_text_entries[pokemonFlavorTextIndex]
            .flavor_text,
        url: pokemon.url,
        image: getPokemonImageById(pokemonId),
        genera: pokemonSpecieData.genera[pokemonGeneraIndex].genus,
        pokedex_number: pokemonData.id.toString().padStart(3, '0'),
        base_experience: pokemonData.base_experience,
        types: pokemonTypesFormatted,
        stats: pokemonStatsFormatted,
        height: pokemonData.height,
        weight: pokemonData.weight,
        abilites: pokemonAbilityFormatted,
        gender_rate: pokemonSpecieData.gender_rate,
        egg_groups: eggGroupsFormatted,
      };
    });

    return response.json(await Promise.all(pokemons));
  }
}
