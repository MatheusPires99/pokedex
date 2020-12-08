import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';
import Constants from 'expo-constants';

import { HEADER_HEIGHT } from '../../../constants';

const { height } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  height: ${height - (Constants.statusBarHeight + HEADER_HEIGHT)}px;
  background: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 16px 0;
`;

export const TabWrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px 24px;
`;
