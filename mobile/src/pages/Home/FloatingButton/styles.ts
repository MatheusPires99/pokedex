import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  z-index: 5;

  position: absolute;
  bottom: 32px;
  right: 24px;

  align-items: flex-end;
`;

export const Button = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.lilac};
  box-shadow: 0px 3px 6px ${({ theme }) => `${theme.colors.black}40`};

  position: absolute;
  bottom: 0;
  right: 0;

  justify-content: center;
  align-items: center;
`;

export const OverlayBackground = styled(Animated.View)`
  background: ${({ theme }) => `${theme.colors.black}60`};
`;
