import styled from 'styled-components/native';

import { HEADER_HEIGHT } from '../../constants';

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  height: ${HEADER_HEIGHT}px;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
