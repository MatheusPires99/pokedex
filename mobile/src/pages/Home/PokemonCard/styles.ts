import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Text from '../../../components/Text';

type ContainerProps = {
  afterThirdCard: boolean;
  rightItem: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled(RectButton)<ContainerProps>`
  position: relative;
  height: 110px;
  margin: 10px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

  ${props =>
    props.afterThirdCard &&
    css`
      margin-top: 0px;
    `}

  ${props =>
    props.afterThirdCard &&
    css`
      margin-left: 0px;
    `}
`;

export const PokemonImage = styled.Image`
  width: 72px;
  height: 72px;
`;

export const PokedexNumber = styled(Text)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Types = styled.View`
  margin-top: 8px;

  align-items: flex-start;
`;

export const Type = styled.View`
  background: ${({ theme }) => theme.colors.white}30;
  padding: 4px 12px;
  border-radius: 16px;
  margin-top: 4px;
`;
