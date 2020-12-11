import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchButtonContainer = styled(Animated.View)`
  margin-left: 16px;
`;

export const SearchButton = styled(RectButton)`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.lilac};

  align-items: center;
  justify-content: center;
`;
