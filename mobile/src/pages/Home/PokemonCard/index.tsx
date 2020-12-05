import React, { useCallback, useMemo } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import { Pokemon } from '../../../types';
import { getColorByPokemonType } from '../../../utils';
import Text from '../../../components/Text';
import PokemonTypes from '../../../components/PokemonTypes';

import { Container, Button, PokedexNumber, PokemonImage } from './styles';

type PokemonCardProps = {
  pokemon: Pokemon;
  afterThirdCard: boolean;
  index: number;
  opacity: Animated.Value;
  translateY: Animated.Value;
};

const PokemonCard = ({
  pokemon,
  afterThirdCard,
  index,
  opacity,
  translateY,
}: PokemonCardProps) => {
  const navigation = useNavigation();

  const handleNavigateToPokemon = useCallback(() => {
    navigation.navigate('Pokemon', {
      pokemon,
    });
  }, [navigation, pokemon]);

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon.types[0].name),
    [pokemon.types],
  );

  const containerStyle = {
    opacity: opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, 50],
          outputRange: [0, 50 * (index + 1)],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Container style={containerStyle}>
      <Button
        afterThirdCard={afterThirdCard}
        style={{
          backgroundColor,
        }}
        onPress={handleNavigateToPokemon}
      >
        <SharedElement
          id={`pokemon.${pokemon.id}.name`}
          style={{ alignItems: 'flex-start' }}
        >
          <Text color="white" bold>
            {pokemon.name}
          </Text>
        </SharedElement>

        <PokedexNumber style={{ fontSize: 10 }}>
          #{pokemon.pokedex_number}
        </PokedexNumber>

        <SharedElement
          id={`pokemon.${pokemon.id}.image`}
          style={{ position: 'absolute', bottom: 8, right: 8 }}
        >
          <PokemonImage source={{ uri: pokemon.image }} />
        </SharedElement>

        <PokemonTypes pokemon={pokemon} size="small" style={{ marginTop: 8 }} />
      </Button>
    </Container>
  );
};

export default PokemonCard;
