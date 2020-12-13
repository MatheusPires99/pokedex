import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather as Icon, AntDesign as Icon2 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Pokemon } from '../../../../types';

import { Container } from './styles';

type FavoriteButtonProps = {
  pokemon: Pokemon;
};

const FavoriteButton = ({ pokemon }: FavoriteButtonProps) => {
  const { colors } = useTheme();

  const [isFavorite, setIsFavorite] = useState(false);

  const pokemons = useMemo<Pokemon[]>(() => [], []);

  useEffect(() => {
    async function loadFavoritePokemons() {
      const storagedPokemons = await AsyncStorage.getItem('@Pokedex:pokemons');

      if (storagedPokemons) {
        const favoritePokemons: Pokemon[] = JSON.parse(storagedPokemons);

        const favoritePokemonsIncludesPokemon = favoritePokemons.some(
          favoritePokemon => favoritePokemon.id === pokemon.id,
        );

        setIsFavorite(favoritePokemonsIncludesPokemon);
      }
    }

    loadFavoritePokemons();
  }, [pokemon]);

  const handleToggleFavorite = useCallback(async () => {
    try {
      const storagedPokemons = await AsyncStorage.getItem('@Pokedex:pokemons');

      const parsedPokemons: Pokemon[] = JSON.parse(
        storagedPokemons || JSON.stringify(''),
      );

      if (isFavorite) {
        Alert.alert(
          'Remover dos favoritos?',
          `Tem certeza que quer remover ${pokemon.name} dos seus Pokémons favoritos?`,
          [
            {
              text: 'Remover',
              onPress: async () => {
                const updatedPokemons = parsedPokemons.filter(
                  parsedPokemon => parsedPokemon.id !== pokemon.id,
                );

                await AsyncStorage.setItem(
                  '@Pokedex:pokemons',
                  JSON.stringify(updatedPokemons),
                );

                setIsFavorite(false);
              },
            },
            {
              text: 'Cancelar',
              style: 'cancel',
            },
          ],
        );
      } else {
        pokemons.push(...parsedPokemons, pokemon);

        await AsyncStorage.setItem(
          '@Pokedex:pokemons',
          JSON.stringify(pokemons),
        );

        setIsFavorite(true);
      }
    } catch (err) {
      Alert.alert(
        'Erro ao favoritar',
        'Ocorreu um erro ao favoritar este Pokémon, tente navamente.',
      );
    }
  }, [isFavorite, pokemons, pokemon]);

  return (
    <Container onPress={handleToggleFavorite}>
      {isFavorite ? (
        <Icon2 name="heart" color={colors.white} size={22} />
      ) : (
        <Icon name="heart" color={colors.white} size={22} />
      )}
    </Container>
  );
};

export default FavoriteButton;
