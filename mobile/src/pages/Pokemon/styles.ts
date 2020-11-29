import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fa6c6c;
`;

export const Header = styled.View`
  padding: 0 24px;
  height: 64px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity``;

export const Content = styled.View``;

export const PokemonHeader = styled.View`
  padding: 0 24px;
`;

export const PokemonHeaderDiv = styled.View`
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
