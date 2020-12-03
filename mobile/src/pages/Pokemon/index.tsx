import React, { useMemo } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';

import Block from '../../components/Block';
import Dots from '../../components/Dots';
import { POKEMON_SUMMARY_HEIGHT } from '../../constants';
import { Pokemon as PokemonType } from '../../types';
import { getColorByPokemonType } from '../../utils';

import Header from './Header';
import PokemonSummary from './PokemonSummary';
import PokemonDetails from './PokemonDetails';
import { Container, PokemonDetailsContainer } from './styles';

export type RouteParams = {
  pokemon: PokemonType;
};

const Pokemon = () => {
  const route = useRoute();

  const { pokemon } = route.params as RouteParams;

  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx: any) => {
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: event => {
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

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon.types[0].name),
    [pokemon.types],
  );

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Block />
      <Dots />

      <Container
        style={{
          backgroundColor,
        }}
      >
        <Header pokemon={pokemon} translateY={translateY} />

        <PokemonSummary pokemon={pokemon} translateY={translateY} />

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <PokemonDetailsContainer style={pokemonDetailsStyle}>
            <PokemonDetails pokemon={pokemon} translateY={translateY} />
          </PokemonDetailsContainer>
        </PanGestureHandler>
      </Container>
    </>
  );
};

export default Pokemon;
