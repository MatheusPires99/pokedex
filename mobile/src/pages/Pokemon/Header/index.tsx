import React, { useCallback } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Pokemon } from '../../../types';
import Text from '../../../components/Text';

import { Container, HeaderContent, GoBackButton } from './styles';

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

        <Animated.View style={textStyle}>
          <Text size={18} fontWeight="bold">
            {pokemon.name}
          </Text>
        </Animated.View>

        <Animated.View style={textStyle}>
          <Text fontWeight="bold">#{pokemon.pokedex_number}</Text>
        </Animated.View>
      </HeaderContent>
    </Container>
  );
};

export default Header;
