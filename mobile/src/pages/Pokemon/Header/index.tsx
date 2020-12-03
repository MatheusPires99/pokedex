import React, { useCallback } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Pokemon } from '../../../types';

import {
  Container,
  HeaderContent,
  GoBackButton,
  PokemonName,
  PokedexNumber,
} from './styles';

type HeaderProps = {
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const Header = ({ pokemon, translateY }: HeaderProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.navigate('Home'), [
    navigation,
  ]);

  const textStyle = {
    opacity: translateY.interpolate({
      inputRange: [-300, -200],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Container>
      <HeaderContent>
        <GoBackButton onPress={handleGoBack}>
          <Icon name="arrow-left" color={colors.white} size={24} />
        </GoBackButton>

        <PokemonName style={textStyle}>{pokemon.name}</PokemonName>

        <PokedexNumber style={textStyle}>
          #{pokemon.pokedex_number}
        </PokedexNumber>
      </HeaderContent>
    </Container>
  );
};

export default Header;
