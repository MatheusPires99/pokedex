import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Block from '../../components/Block';
import Dots from '../../components/Dots';
import { POKEMON_TYPE_COLORS } from '../../constants';
import usePokemon from '../../hooks/pokemon';

import Header from './Header';
import PokemonHeader from './PokemonHeader';
import PokemonDetails from './PokemonDetails';
import {
  Container,
  PokemonSummary,
  PokemonImageContainer,
  PokemonImage,
  PokemonDetailsContainer,
} from './styles';

export const POKEMON_SUMMARY_HEIGHT = 370;

const Pokemon = () => {
  const { pokemon, loading, getPokemon } = usePokemon();

  getPokemon(6);

  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      if (event.translationY >= -100) {
        translateY.value = withTiming(0, {
          duration: 200,
        });
      }

      if (event.translationY < -100) {
        translateY.value = withTiming(-POKEMON_SUMMARY_HEIGHT, {
          duration: 200,
        });
      }
    },
  });

  const pokemonDetailsStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [-POKEMON_SUMMARY_HEIGHT, 0, 200],
            [-POKEMON_SUMMARY_HEIGHT, 0, 50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const pokemonImageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, -100],
        [1, 0],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [-100, 0, 200],
            [-20, 0, 25],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const pokemonSummaryStyle = useAnimatedStyle(() => {
    return {
      zIndex: interpolate(
        translateY.value,
        [0, -POKEMON_SUMMARY_HEIGHT],
        [2, -1],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(
        translateY.value,
        [0, -200],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container
      style={{
        backgroundColor:
          POKEMON_TYPE_COLORS[pokemon.types[0].name.toLowerCase()],
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Block />
      <Dots />

      <Header translateY={translateY} />

      <PokemonSummary
        height={POKEMON_SUMMARY_HEIGHT}
        style={pokemonSummaryStyle}
      >
        <PokemonHeader pokemon={pokemon} />

        <PokemonImageContainer style={pokemonImageStyle}>
          <PokemonImage source={{ uri: pokemon.image }} />
        </PokemonImageContainer>
      </PokemonSummary>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <PokemonDetailsContainer style={pokemonDetailsStyle}>
          <PokemonDetails translateY={translateY} />
        </PokemonDetailsContainer>
      </PanGestureHandler>
    </Container>
  );
};

export default Pokemon;
