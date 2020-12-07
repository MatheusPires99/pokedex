export type Demage = {
  name: string;
  url: string;
};

export type Type = {
  damage_relations: {
    double_damage_from: Demage[];
    double_damage_to: Demage[];
    half_damage_from: Demage[];
    half_damage_to: Demage[];
    no_damage_to: Demage[];
  };
  id: number;
  name: string;
};

export default Type;
