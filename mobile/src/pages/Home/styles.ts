import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Constants from 'expo-constants';

import { Pokemon } from '../../types';
import { HEADER_HEIGHT } from '../../constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: ${Constants.statusBarHeight}px;

  height: ${HEADER_HEIGHT}px;
  margin-bottom: 8px;

  justify-content: center;
`;

export const PokemonsList = styled(FlatList as new () => FlatList<Pokemon>)`
  flex: 1;
`;
