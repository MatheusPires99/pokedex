import React, { PropsWithChildren } from 'react';
import { TextProps as ReactNativeTextProps } from 'react-native';

import { Container } from './styles';

export type TextProps = ReactNativeTextProps & {
  size?: number;
  color?: string;
  fontWeight?: 'regular' | 'medium' | 'semiBold' | 'bold';
};

const Text = ({
  size,
  color,
  fontWeight,
  children,
  ...rest
}: PropsWithChildren<TextProps>) => {
  return (
    <Container size={size} color={color} fontWeight={fontWeight} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
