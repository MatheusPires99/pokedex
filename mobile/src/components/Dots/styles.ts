import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  position: absolute;
  top: ${Constants.statusBarHeight - 28}px;
  right: 30%;
`;

export const Dot = styled.View`
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.white}20;
  margin-left: 8px;
  margin-top: 10px;
`;
