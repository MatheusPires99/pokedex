import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import Pokeball from '../../../../../components/Pokeball';

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
  position: relative;

  align-items: center;
`;

export const PokeballBackground = styled(Pokeball).attrs({
  width: 120,
  height: 120,
  color: '#F4F5F4',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const PokemonImage = styled.Image`
  width: 112px;
  height: 112px;
  margin-bottom: 16px;
`;

export const MinLevel = styled.View`
  align-items: center;
`;
