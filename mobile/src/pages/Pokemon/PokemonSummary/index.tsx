import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';

import {
  Container,
  Header,
  Row,
  Name,
  PokedexNumber,
  Types,
  Type,
  TypeText,
  PokemonGenera,
  PokemonImageContainer,
  PokemonImage,
} from './styles';

type PokemonSummaryProps = {
  translateY: Animated.SharedValue<number>;
  pokemon: Pokemon;
};

const PokemonSummary = ({ translateY, pokemon }: PokemonSummaryProps) => {
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

  return (
    <Container height={POKEMON_SUMMARY_HEIGHT} style={pokemonSummaryStyle}>
      <Header>
        <Row>
          <Name>{pokemon.name}</Name>
          <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>
        </Row>

        <Row style={{ marginTop: 16 }}>
          <Types>
            {pokemon.types.map(type => (
              <Type key={type.url}>
                <TypeText>{type.name}</TypeText>
              </Type>
            ))}
          </Types>
          <PokemonGenera>{pokemon.genera}</PokemonGenera>
        </Row>
      </Header>

      <PokemonImageContainer style={pokemonImageStyle}>
        <SharedElement id={`pokemon.${pokemon.id}`}>
          <PokemonImage source={{ uri: pokemon.image }} />
        </SharedElement>
      </PokemonImageContainer>
    </Container>
  );
};

export default PokemonSummary;
