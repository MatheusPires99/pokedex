import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.lightGrey};
  padding-bottom: 32px;
  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Pokemon = styled.View`
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 112px;
  height: 112px;
  margin-bottom: 16px;
`;

export const MinLevel = styled.View`
  align-items: center;
`;
