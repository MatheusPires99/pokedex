import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  position: relative;
  background: #fa6c6c;
`;

export const Header = styled.SafeAreaView``;

export const HeaderContent = styled.View`
  padding: 0 24px;
  height: 64px;

  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export const PokemonSummary = styled.View`
  z-index: 2;
`;

export const PokemonImageContainer = styled.View`
  margin-top: 24px;

  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: ${width <= 375 ? 212 : 256}px;
  height: ${width <= 375 ? 212 : 256}px;
`;
