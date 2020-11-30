import React from 'react';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Block from '../../components/Block';
import Dots from '../../components/Dots';
import usePokemon from '../../hooks/pokemon';

import PokemonHeader from './PokemonHeader';
import PokemonDetails from './PokemonDetails';
import {
  Container,
  Header,
  HeaderContent,
  GoBackButton,
  PokemonSummary,
  PokemonImageContainer,
  PokemonImage,
} from './styles';

const Pokemon = () => {
  const { colors } = useTheme();
  const { pokemon, loading, getPokemon } = usePokemon();

  getPokemon(4);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Block />
      <Dots />

      <Header>
        <HeaderContent>
          <GoBackButton>
            <Icon name="arrow-left" color={colors.white} size={24} />
          </GoBackButton>
        </HeaderContent>
      </Header>

      <PokemonSummary>
        <PokemonHeader pokemon={pokemon} />

        <PokemonImageContainer>
          <PokemonImage source={{ uri: pokemon.image }} />
        </PokemonImageContainer>
      </PokemonSummary>

      <PokemonDetails />
    </Container>
  );
};

export default Pokemon;
