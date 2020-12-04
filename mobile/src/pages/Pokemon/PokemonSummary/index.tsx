import React from 'react';
import { Animated, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import Text from '../../../components/Text';
import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';

import {
  Container,
  Header,
  Row,
  Types,
  Type,
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
      {
        scale: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [0.9, 1, 1.1],
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
              <Text size={32} fontWeight="bold">
                {pokemon.name}
              </Text>
            </SharedElement>
          </View>

          <Text size={16} fontWeight="bold">
            #{pokemon.pokedex_number}
          </Text>
        </Row>

        <Row style={{ marginTop: 16 }}>
          <Types>
            {pokemon.types.map(type => (
              <Type key={type.url}>
                <Text size={12}>{type.name}</Text>
              </Type>
            ))}
          </Types>

          <Text size={12}>{pokemon.genera}</Text>
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
