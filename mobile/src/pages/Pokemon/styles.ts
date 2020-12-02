import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');

type PokemonSummaryProps = {
  height: number;
};

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const PokemonSummary = styled(Animated.View)<PokemonSummaryProps>`
  z-index: 2;
  height: ${props => props.height}px;
`;

export const PokemonImageContainer = styled(Animated.View)`
  margin-top: 24px;

  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: ${width <= 375 ? 212 : 256}px;
  height: ${width <= 375 ? 212 : 256}px;
`;

export const PokemonDetailsContainer = styled(Animated.View)`
  flex: 1;
  position: relative;
`;
