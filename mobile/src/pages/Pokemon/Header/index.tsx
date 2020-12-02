import React, { useCallback } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import usePokemon from '../../../hooks/pokemon';

import {
  Container,
  HeaderContent,
  GoBackButton,
  PokemonName,
  PokedexNumber,
} from './styles';

type HeaderProps = {
  translateY: Animated.SharedValue<number>;
};

const Header = ({ translateY }: HeaderProps) => {
  const { colors } = useTheme();
  const { pokemon } = usePokemon();
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const pokemonNameStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [-250, -300],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const pokedexNumberStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [-250, -300],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Container>
      <HeaderContent>
        <GoBackButton onPress={handleGoBack}>
          <Icon name="arrow-left" color={colors.white} size={24} />
        </GoBackButton>

        <PokemonName style={pokemonNameStyle}>{pokemon.name}</PokemonName>

        <PokedexNumber style={pokedexNumberStyle}>
          #{pokemon.pokedex_number}
        </PokedexNumber>
      </HeaderContent>
    </Container>
  );
};

export default Header;
