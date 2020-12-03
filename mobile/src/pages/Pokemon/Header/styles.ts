import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.SafeAreaView``;

export const HeaderContent = styled.View`
  padding: 0 24px;
  height: 64px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export const PokemonName = styled(Animated.Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
`;

export const PokedexNumber = styled(Animated.Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
`;
