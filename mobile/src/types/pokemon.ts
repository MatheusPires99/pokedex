export type Type = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  name: string;
  url: string;
};

export type Ability = {
  name: string;
  url: string;
};

export type Evolution = {
  first_evolution?: {
    name: string;
    url: string;
    min_level: number;
    image: string;
  };
  second_evolution?: {
    name: string;
    url: string;
    min_level: number;
    image: string;
  };
};

export type EggGroup = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  description: string;
  image: string;
  genera: string;
  pokedex_number: string;
  base_experience: number;
  types: Type[];
  stats: Stat[];
  height: number;
  weight: number;
  abilites: Ability[];
  evolution?: Evolution[];
  egg_groups: EggGroup[];
};

export default Pokemon;
