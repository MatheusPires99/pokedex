export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};

export default PokemonApiResult;
