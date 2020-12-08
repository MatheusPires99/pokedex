import React from 'react';
import { ViewProps } from 'react-native';

import { Container, PokeballImage } from './styles';

export type PokeballProps = ViewProps & {
  width: number;
  height: number;
};

const Pokeball = ({ width, height, ...rest }: PokeballProps) => {
  return (
    <Container {...rest}>
      <PokeballImage
        uri="https://ik.imagekit.io/hwyksvj4iv/pokeball_aQ_CV7B3Z.png"
        width={width}
        height={height}
      />
    </Container>
  );
};

export default Pokeball;
