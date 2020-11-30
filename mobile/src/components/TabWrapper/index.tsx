import React, { PropsWithChildren } from 'react';

import { Container } from './styles';

const TabWrapper = ({ children }: PropsWithChildren<unknown>) => {
  return <Container>{children}</Container>;
};

export default TabWrapper;
