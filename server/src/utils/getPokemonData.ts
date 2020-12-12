import { Pokemon, PokemonSpecie } from '../types';
import pokeApi from '../services/pokeApi';

import { capitalizeFirstLetter, getPokemonImageById } from '.';

const getPokemonData = async (value: string) => {
  const { data: pokemonData } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);
  const { data: pokemonSpecieData } = await pokeApi.get<PokemonSpecie>(
    `/pokemon-species/${value}`,
  );

  const pokemonNameIndex = pokemonSpecieData.names.findIndex(
    name => name.language.name === 'en',
  );

  const pokemonFlavorTextIndex = pokemonSpecieData.flavor_text_entries.findIndex(
    text =>
      text.version.name === 'ruby' ||
      text.version.name === 'platinum' ||
      text.version.name === 'soulsilver',
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

  const pokemonAbilityFormatted = pokemonData.abilities.map(({ ability }) => {
    return {
      name: capitalizeFirstLetter(ability.name),
      url: ability.url,
    };
  });

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
      pokemonSpecieData.flavor_text_entries[pokemonFlavorTextIndex].flavor_text,
    image: getPokemonImageById(String(pokemonData.id)),
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
};

export default getPokemonData;
