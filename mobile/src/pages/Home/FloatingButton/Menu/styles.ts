import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  z-index: -2;

  align-items: flex-end;
  flex-direction: column-reverse;
`;

export const ItemButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 20px;
  border-radius: 22px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;
