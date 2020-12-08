import React from 'react';
import { Animated, ViewProps } from 'react-native';

import pokeballImage from '../../../assets/pokeball.png';
import theme from '../../styles/theme';

import { Container, PokeballImage } from './styles';

export type PokeballProps = Animated.AnimatedProps<ViewProps> & {
  width: number;
  height: number;
  color?: string;
};

const Pokeball = ({ width, height, color, ...rest }: PokeballProps) => {
  return (
    <Container {...rest}>
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
};

export default Pokeball;
