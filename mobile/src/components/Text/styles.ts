import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

import { TextProps } from '.';

export const Container = styled(Animated.Text)<TextProps>`
  ${({ theme, variant }) => theme.textVariantes[variant]};
  color: ${({ color }) => color};

  ${props =>
    props.bold &&
    css`
      font-family: ${({ theme }) => theme.fontFamily.bold};
    `}
`;
