import React, { useCallback } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Pokemon } from '../../../types';
import Text from '../../../components/Text';
import Pokeball from '../../../components/Pokeball';

import FavoriteButton from './FavoriteButton';
import { Container, GoBackButton } from './styles';

type HeaderProps = {
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const Header = ({ pokemon, translateY }: HeaderProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const fadeStyle = {
    opacity: translateY.interpolate({
      inputRange: [-300, -200],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Container>
      <GoBackButton onPress={handleGoBack}>
        <Icon name="arrow-left" color={colors.white} size={24} />
      </GoBackButton>

      <Animated.View style={fadeStyle}>
        <Text variant="body1" color="white" bold>
          {pokemon.name}
        </Text>
      </Animated.View>

      <FavoriteButton pokemon={pokemon} />

      <Pokeball
        width={150}
        height={150}
        withRotate
        style={{
          position: 'absolute',
          right: -30,
          ...fadeStyle,
        }}
      />
    </Container>
  );
};

export default Header;
