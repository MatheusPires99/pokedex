import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Pokemon } from '../types';

type PokemonContextData = {
  pokemon: Pokemon;
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>;
};

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [pokemon, setPokemon] = useState({} as Pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
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
