import styled from 'styled-components/native';
import { Animated } from 'react-native';

type StatValueProps = {
  width: number;
};

export const Stat = styled.View`
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const StatGraph = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
`;

export const StatLine = styled.View`
  flex: 1;
  overflow: hidden;
  height: 3px;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin-left: 16px;
`;

export const StatValue = styled(Animated.View)<StatValueProps>`
  height: 3px;
  background: ${({ theme, width }) =>
    width < 50 ? theme.colors.red : theme.colors.green};
  width: ${props => props.width}%;
`;
