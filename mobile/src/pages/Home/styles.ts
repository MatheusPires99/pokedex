import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Pokemon } from '../../types';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.SafeAreaView``;

export const HeaderContent = styled.View`
  height: 64px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const PokemonsList = styled(FlatList as new () => FlatList<Pokemon>)`
  flex: 1;
`;
