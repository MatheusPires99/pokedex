import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(Animated.View)`
  z-index: 10;
  width: ${width}px;
  min-height: 200px;
  background: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Line = styled.View`
  width: 80px;
  height: 4px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.semiGrey};
  margin: 16px 0;

  align-self: center;
`;
