import React, { useCallback, useEffect, useMemo } from 'react';
import { Animated, Easing, RegisteredStyle, ViewStyle } from 'react-native';

import pokeballImage from '../../../assets/pokeball.png';
import theme from '../../styles/theme';

import { Container, PokeballImage } from './styles';

export type PokeballProps = {
  width: number;
  height: number;
  color?: string;
  withRotate?: boolean;
  style?: RegisteredStyle<ViewStyle> | Animated.WithAnimatedObject<ViewStyle>;
};

const Pokeball = ({
  width,
  height,
  color,
  withRotate,
  style,
}: PokeballProps) => {
  const pokeballOpacity = useMemo(() => new Animated.Value(0), []);
  const rotate = useMemo(() => new Animated.Value(0), []);

  const rotatePokeball = useCallback(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 360,
        duration: 4500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotate]);

  useEffect(() => {
    if (withRotate) {
      Animated.timing(pokeballOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
        delay: 200,
        easing: Easing.inOut(Easing.quad),
      }).start();

      rotatePokeball();
    }
  }, [pokeballOpacity, rotatePokeball, withRotate]);

  const pokeballStyle = {
    opacity: pokeballOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        rotate: rotate.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Container style={[style, withRotate && pokeballStyle]}>
      <PokeballImage
        source={pokeballImage}
        width={width}
        height={height}
        style={{
          tintColor: color,
        }}
      />
    </Container>
  );
};

Pokeball.defaultProps = {
  color: `${theme.colors.white}20`,
  widthRotate: false,
  style: {},
};

export default Pokeball;
