import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ContainerProps = {
  afterThirdCard: boolean;
  rightItem: boolean;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;

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

export const PokemonName = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const PokemonImage = styled.Image`
  width: 72px;
  height: 72px;
`;

export const PokedexNumber = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.black}30;

  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Types = styled.View`
  align-items: flex-start;
`;

export const Type = styled.View`
  background: ${({ theme }) => theme.colors.white}30;
  padding: 4px 12px;
  border-radius: 16px;
  margin-top: 4px;
`;

export const TypeText = styled.Text`
  font-size: 8px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;
