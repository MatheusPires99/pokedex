import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { View } from 'react-native';

import api from '../../services/api';
import { API_OFFSET } from '../../constants';
import { Pokemon } from '../../types';
import Text from '../../components/Text';

import PokemonCard from './PokemonCard';
import { Container, Header, PokemonsList, Loading } from './styles';

const Home = () => {
  const { colors } = useTheme();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [counter, setCounter] = useState(1);
  const [loadingInitalData, setLoadingInitialData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadPokemons = useCallback(
    async (offsetValue = offset, shouldRefresh = false) => {
      setLoading(true);

      const response = await api.get<Pokemon[]>('pokemons', {
        params: {
          offset: offsetValue,
        },
      });

      const { data } = response;

      if (loadingInitalData) {
        setLoadingInitialData(false);
      }

      setPokemons(shouldRefresh ? data : [...pokemons, ...data]);
      setOffset(shouldRefresh ? API_OFFSET : API_OFFSET * counter);
      setCounter(shouldRefresh ? 2 : counter + 1);
      setLoading(false);
    },
    [pokemons, loadingInitalData, offset, counter],
  );

  useEffect(() => {
    loadPokemons();
  }, []);

  const refreshList = useCallback(async () => {
    setRefreshing(true);

    await loadPokemons(0, true);

    setRefreshing(false);
  }, [loadPokemons]);

  if (loadingInitalData) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text color={colors.black}>Carregando...</Text>
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <Text color={colors.black} size={32} fontWeight="bold">
          Pokedex
        </Text>
      </Header>

      <PokemonsList
        data={pokemons}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        onEndReached={() => loadPokemons()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading ? <Loading /> : <></>}
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
