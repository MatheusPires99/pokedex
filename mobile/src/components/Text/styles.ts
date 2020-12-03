import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { TextProps } from '.';

export const Container = styled(Animated.Text)<TextProps>`
  font-size: ${({ size }) => size || 14}px;
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: ${({ theme, fontWeight }) =>
    fontWeight ? theme.fonts[fontWeight] : theme.fonts.semiBold};
`;
