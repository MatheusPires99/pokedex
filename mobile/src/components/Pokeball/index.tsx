import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, PokeballImage } from './styles';

export type PokeballProps = ViewProps & {
  width: number;
  height: number;
};

const Pokeball = ({ width, height, ...rest }: PokeballProps) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <PokeballImage
        uri="https://ik.imagekit.io/hwyksvj4iv/pokeball_5evVpM95L.png"
        width={width}
        height={height}
        style={{ tintColor: `${colors.white}25` }}
      />
    </Container>
  );
};

export default Pokeball;
