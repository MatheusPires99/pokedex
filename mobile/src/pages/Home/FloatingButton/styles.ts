import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  z-index: 5;

  position: absolute;
  bottom: 32px;
  right: 24px;

  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.lilac};
  box-shadow: 0px 3px 6px ${({ theme }) => `${theme.colors.black}40`};

  justify-content: center;
  align-items: center;
`;

export const OverlayBackground = styled(Animated.View)`
  background: ${({ theme }) => `${theme.colors.black}60`};
`;
