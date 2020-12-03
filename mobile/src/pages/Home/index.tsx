import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import api from '../../services/api';
import { ApiListResult } from '../../types';
import Text from '../../components/Text';

import PokemonCard from './PokemonCard';
import { Container, Header, HeaderContent, PokemonsList } from './styles';

const Home = () => {
  const { colors } = useTheme();

  const [pokemons, setPokemons] = useState({} as ApiListResult);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get<ApiListResult>('pokemons');

      setPokemons(response.data);
      setLoading(false);
    }

    getPokemons();
  }, []);

  if (loading) {
    return <Text color={colors.black}>Carregando...</Text>;
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Text color={colors.black} size={32} fontWeight="bold">
            Pokedex
          </Text>
        </HeaderContent>
      </Header>

      <PokemonsList
        data={pokemons.results}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        keyExtractor={pokemon => String(pokemon.id)}
        numColumns={2}
        renderItem={({ item: pokemon, index }) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              afterThirdCard={!!(index + 2)}
              rightItem={!!(index % 2)}
            />
          );
        }}
      />
    </Container>
  );
};

export default Home;
