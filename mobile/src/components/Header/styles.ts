import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { HEADER_HEIGHT } from '../../constants';

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  margin-bottom: 8px;
  height: ${HEADER_HEIGHT}px;

  justify-content: center;
`;
