export type EggGroup = {
  name: string;
  url: string;
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
};

export type Genera = {
  genus: string;
  language: {
    name: string;
    url: string;
  };
};

export type Name = {
  language: {
    name: string;
    url: string;
  };
  name: string;
};

export type PokemonSpecie = {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: EggGroup[];
  flavor_text_entries: FlavorTextEntry[];
  gender_rate: number;
  genera: Genera[];
  names: Name[];
  order: number;
  evolution_chain: {
    url: string;
  };
};

export default PokemonSpecie;
