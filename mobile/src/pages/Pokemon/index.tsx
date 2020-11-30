import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import api from '../../services/api';
import { Pokemon as PokemonType } from '../../types/pokemon';
import Block from '../../components/Block';
import Dots from '../../components/Dots';

import PokemonHeader from './PokemonHeader';
import {
  Container,
  Header,
  GoBackButton,
  Content,
  PokemonImageContainer,
  PokemonImage,
} from './styles';

const Pokemon = () => {
  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState({} as PokemonType);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get<PokemonType>(`pokemons/${4}`);

      setPokemon(response.data);
      setLoading(false);
    }

    getPokemon();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Block />
      <Dots />

      <Header>
        <GoBackButton>
          <Icon name="arrow-left" color={colors.white} size={24} />
        </GoBackButton>
      </Header>

      <Content>
        <PokemonHeader pokemon={pokemon} />

        <PokemonImageContainer>
          <PokemonImage source={{ uri: pokemon.image }} />
        </PokemonImageContainer>
      </Content>
    </Container>
  );
};

export default Pokemon;
