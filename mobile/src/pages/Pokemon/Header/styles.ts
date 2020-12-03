import styled from 'styled-components/native';

import { HEADER_HEIGHT } from '../../../constants';

export const Container = styled.SafeAreaView``;

export const HeaderContent = styled.View`
  padding: 0 24px;
  height: ${HEADER_HEIGHT}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;
