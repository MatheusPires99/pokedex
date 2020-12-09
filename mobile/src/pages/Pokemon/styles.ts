import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Constans from 'expo-constants';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: ${Constans.statusBarHeight}px;
`;

export const DetailsContainer = styled(Animated.View)`
  flex: 1;
  position: relative;
`;
