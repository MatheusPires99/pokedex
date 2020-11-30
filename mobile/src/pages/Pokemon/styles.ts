import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background: #fa6c6c;
`;

export const Header = styled.View`
  padding: 0 24px;
  height: 64px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View``;

export const PokemonImageContainer = styled.View`
  margin-top: 24px;

  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 256px;
  height: 256px;
`;
