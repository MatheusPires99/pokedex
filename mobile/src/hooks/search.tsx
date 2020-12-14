/* eslint-disable consistent-return */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';
import { Alert } from 'react-native';

import api from '../services/api';
import { Pokemon } from '../types';

interface SearchContextData {
  isSearching: boolean;
  handleToggleSearch: () => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  handleSearchPokemon: (pokemon_name: string) => Promise<Pokemon | undefined>;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleToggleSearch = useCallback(() => {
    setIsSearching(!isSearching);
  }, [isSearching]);

  const handleSearchPokemon = useCallback(async (pokemon_name: string) => {
    try {
      const pokemonNameInLowerCase = pokemon_name.toLowerCase();

      const { data: pokemon } = await api.get<Pokemon>(
        `pokemons/${pokemonNameInLowerCase}`,
      );

      return pokemon;
    } catch (err) {
      Alert.alert(
        'Fail to get Pokémon',
        'An error has ocurred when try to load this Pokémon, check if you typed it`s name correct.',
      );
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        isSearching,
        handleToggleSearch,
        searchValue,
        setSearchValue,
        handleSearchPokemon,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  return context;
}
