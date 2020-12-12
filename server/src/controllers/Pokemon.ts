import { Request, Response } from 'express';

import { getPokemonData, getPokemonIdByUrl } from '../utils';
import { PokemonApiResult } from '../types';
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

      const pokemonData = await getPokemonData(pokemonId);

      return pokemonData;
    });

    return response.json(await Promise.all(pokemons));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { pokemon_name } = request.params;

      const pokemonData = await getPokemonData(String(pokemon_name));

      return response.json(pokemonData);
    } catch (err) {
      return response.status(404).json({
        error: {
          code: err.response.status,
          message: err.response.data,
        },
      });
    }
  }
}
