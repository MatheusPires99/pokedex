import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import Text from '../../../components/Text';

type ButtonProps = {
  afterThirdCard: boolean;
  rightCard: boolean;
};

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Button = styled(RectButton)<ButtonProps>`
  position: relative;
  overflow: hidden;
  height: 110px;
  margin: 10px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

  ${props =>
    props.afterThirdCard &&
    css`
      margin-top: 0px;
      margin-left: 0px;
    `}

  ${props =>
    props.rightCard &&
    css`
      margin-right: 0px;
    `}
`;

export const PokemonImage = styled(Image)`
  width: 72px;
  height: 72px;
`;

export const PokedexNumber = styled(Text)`
  color: ${({ theme }) => `${theme.colors.black}30`};

  position: absolute;
  right: 10px;
  top: 10px;
`;
