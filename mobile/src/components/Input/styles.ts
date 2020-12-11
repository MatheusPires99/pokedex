import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  height: 48px;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.semiGrey};
  border-radius: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.textVariantes.input};
`;
