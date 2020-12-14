/* eslint-disable consistent-return */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';
import { Alert } from 'react-native';

import { Pokemon } from '../types';

interface FavoritePokemonsContextData {
  favoritePokemons: Pokemon[];
  handleGetFavoritePokemons: () => void;
}

const FavoritePokemonsContext = createContext<FavoritePokemonsContextData>(
  {} as FavoritePokemonsContextData,
);

export const FavoritePokemonsProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const handleGetFavoritePokemons = useCallback(async () => {
    const pokemons = await AsyncStorage.getItem('@Pokedex:pokemons');

    if (pokemons && pokemons !== '[]') {
      setFavoritePokemons(JSON.parse(pokemons));
    } else {
      setFavoritePokemons([]);

      Alert.alert(
        'No Pokémons found',
        'It looks like you do not have any Pokémons on your favorite list.',
      );
    }
  }, []);

  return (
    <FavoritePokemonsContext.Provider
      value={{
        favoritePokemons,
        handleGetFavoritePokemons,
      }}
    >
      {children}
    </FavoritePokemonsContext.Provider>
  );
};

export default function useFavoritePokemons(): FavoritePokemonsContextData {
  const context = useContext(FavoritePokemonsContext);

  return context;
}
