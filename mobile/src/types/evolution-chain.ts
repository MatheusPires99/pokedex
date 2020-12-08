export type DefaultEvolution = {
  name: string;
  url: string;
  min_level: number;
  image: string;
};

export type EvolutionChain = {
  base_form: {
    name: string;
    image: string;
  };
  first_evolution: DefaultEvolution;
  second_evolution: DefaultEvolution;
};

export default EvolutionChain;
