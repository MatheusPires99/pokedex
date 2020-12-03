import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
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
import { Container, Content, PokemonDetailsContainer } from './styles';

export type RouteParams = {
  pokemon: PokemonType;
};

const Pokemon = () => {
  const route = useRoute();

  const { pokemon } = route.params as RouteParams;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChanged = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      if (translationY < -100) {
        opened = true;
      } else {
        translateY.flattenOffset();
      }

      Animated.timing(translateY, {
        toValue: opened ? -POKEMON_SUMMARY_HEIGHT : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        translateY.extractOffset();
      });
    }
  };

  const pokemonDetailsStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-POKEMON_SUMMARY_HEIGHT, 0, 200],
          outputRange: [-POKEMON_SUMMARY_HEIGHT, 0, 50],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

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
        <Content>
          <Header pokemon={pokemon} translateY={translateY} />

          <PokemonSummary pokemon={pokemon} translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <PokemonDetailsContainer style={pokemonDetailsStyle}>
              <PokemonDetails pokemon={pokemon} translateY={translateY} />
            </PokemonDetailsContainer>
          </PanGestureHandler>
        </Content>
      </Container>
    </>
  );
};

export default Pokemon;
