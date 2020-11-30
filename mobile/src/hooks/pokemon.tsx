import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import api from '../services/api';
import { Pokemon } from '../types/pokemon';

type PokemonContextData = {
  pokemon: Pokemon;
  loading: boolean;
  getPokemon: (id: number) => Promise<void>;
};

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [loading, setLoading] = useState(true);

  async function getPokemon(id: number) {
    const response = await api.get<Pokemon>(`pokemons/${id}`);

    setPokemon(response.data);
    setLoading(false);
  }

  return (
    <PokemonContext.Provider value={{ pokemon, loading, getPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = (): PokemonContextData => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(`usePokemon must be used within an PokemonProvider`);
  }

  return context;
};

export default usePokemon;
