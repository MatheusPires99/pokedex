import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Constants from 'expo-constants';

import { Pokemon } from '../../types';
import { HEADER_HEIGHT } from '../../constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  position: relative;
`;

export const Header = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  margin-bottom: 8px;
  height: ${HEADER_HEIGHT}px;

  justify-content: center;
`;

export const PokemonsList = styled(FlatList as new () => FlatList<Pokemon>)`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
})`
  margin: 8px 0;
`;
