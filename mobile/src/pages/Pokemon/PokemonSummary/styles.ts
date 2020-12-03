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

export const PokemonImageContainer = styled(Animated.View)`
  margin-top: 24px;

  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 256px;
  height: 256px;
`;
