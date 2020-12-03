import React from 'react';
import { Animated, View } from 'react-native';
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
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const PokemonSummary = ({ pokemon, translateY }: PokemonSummaryProps) => {
  const pokemonSummaryStyle = {
    zIndex: translateY.interpolate({
      inputRange: [-POKEMON_SUMMARY_HEIGHT, 0],
      outputRange: [-1, 2],
      extrapolate: 'clamp',
    }),
    opacity: translateY.interpolate({
      inputRange: [-200, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const pokemonImageContainerStyle = {
    opacity: translateY.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [-20, 0, 25],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Container style={pokemonSummaryStyle}>
      <Header>
        <Row>
          <View style={{ alignItems: 'flex-start' }}>
            <SharedElement id={`pokemon.${pokemon.id}.name`}>
              <Name>{pokemon.name}</Name>
            </SharedElement>
          </View>

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

      <PokemonImageContainer style={pokemonImageContainerStyle}>
        <SharedElement id={`pokemon.${pokemon.id}.image`}>
          <PokemonImage source={{ uri: pokemon.image }} />
        </SharedElement>
      </PokemonImageContainer>
    </Container>
  );
};

export default PokemonSummary;
