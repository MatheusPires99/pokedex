import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';

export const Container = styled(Animated.View)`
  height: ${POKEMON_SUMMARY_HEIGHT}px;
`;

export const Header = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const PokedexNumber = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Types = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Type = styled.View`
  background: ${({ theme }) => theme.colors.white}30;
  padding: 6px 28px;
  border-radius: 16px;
  margin-right: 8px;
`;

export const TypeText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const PokemonGenera = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;

export const PokemonImageContainer = styled(Animated.View)`
  margin-top: 24px;

  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 256px;
  height: 256px;
`;
