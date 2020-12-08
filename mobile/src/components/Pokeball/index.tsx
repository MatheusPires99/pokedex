import React from 'react';
import { Animated, ViewProps } from 'react-native';

import { Container, PokeballImage } from './styles';

export type PokeballProps = Animated.AnimatedProps<ViewProps> & {
  width: number;
  height: number;
};

const POKEBALL_IMAGE_URL =
  'https://ik.imagekit.io/hwyksvj4iv/pokeball_aQ_CV7B3Z.png';

const Pokeball = ({ width, height, ...rest }: PokeballProps) => {
  return (
    <Container {...rest}>
      <PokeballImage uri={POKEBALL_IMAGE_URL} width={width} height={height} />
    </Container>
  );
};

export default Pokeball;
