import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Animated, Alert } from 'react-native';

import api from '../../services/api';
import { API_OFFSET } from '../../constants';
import { Pokemon } from '../../types';
import useSearch from '../../hooks/search';
import Text from '../../components/Text';
import Loading from '../../components/Loading';
import Header from '../../components/Header';

import PokemonCard from './PokemonCard';
import FloatingButton from './FloatingButton';
import SearchModal from './SearchModal';
import { Container, PokemonsList } from './styles';

const Home = () => {
  const { isSearching } = useSearch();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [counter, setCounter] = useState(1);
  const [loadingInitalData, setLoadingInitialData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const opacity = useMemo(() => new Animated.Value(0), []);
  const translateY = useMemo(() => new Animated.Value(50), []);

  const loadPokemons = useCallback(
    async (offsetValue = offset, shouldRefresh = false) => {
      try {
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

        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),

          Animated.timing(translateY, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]).start();
      } catch (err) {
        Alert.alert(
          'Fail to get Pokémons',
          'An error has ocurred when try to load the Pokémons, please try again.',
        );
      }
    },
    [pokemons, loadingInitalData, offset, counter, opacity, translateY],
  );

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ListFooterComponent = useMemo(
    () => (loading ? <Loading style={{ marginVertical: 8 }} /> : <></>),
    [loading],
  );

  const refreshList = useCallback(async () => {
    setRefreshing(true);

    await loadPokemons(0, true);

    setRefreshing(false);
  }, [loadPokemons]);

  if (loadingInitalData) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <Text variant="title">Pokedex</Text>
      </Header>

      <PokemonsList
        data={pokemons}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 24 }}
        onEndReached={() => loadPokemons()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={pokemon => String(pokemon.id)}
        numColumns={2}
        renderItem={({ item: pokemon, index }) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              afterThirdCard={!!(index + 2)}
              rightCard={!!(index % 2)}
              opacity={opacity}
            />
          );
        }}
      />

      <FloatingButton />

      {isSearching && <SearchModal />}
    </Container>
  );
};

export default Home;
