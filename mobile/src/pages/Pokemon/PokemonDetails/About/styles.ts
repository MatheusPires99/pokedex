import styled from 'styled-components/native';

export const PokemonDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 22px;
`;

export const PokemonProportionsContainer = styled.View`
  margin-top: 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.2);
  padding: 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const PokemonProportions = styled.View``;
