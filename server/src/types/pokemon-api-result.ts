import Pokemon from './pokemon';

export type PokemonApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};

export default PokemonApiResult;
