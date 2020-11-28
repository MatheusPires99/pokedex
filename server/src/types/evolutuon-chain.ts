export type EvolutionDetails = {
  gender: string;
  held_item: string;
  item: string;
  known_move: string;
  known_move_type: string;
  location: string;
  min_affection: string;
  min_beauty: string;
  min_happiness: string;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: string;
  party_type: string;
  relative_physical_stats: string;
  time_of_day: string;
  trade_species: string;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
};

export type EvolvesTo = {
  evolution_details: EvolutionDetails[];
  evolves_to: EvolvesTo[];
  species: {
    name: string;
    url: string;
  };
};

export type EvolutionChain = {
  baby_trigger_item: string;
  chain: {
    evolution_details: EvolutionDetails[];
    evolves_to: EvolvesTo[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
};

export default EvolutionChain;
