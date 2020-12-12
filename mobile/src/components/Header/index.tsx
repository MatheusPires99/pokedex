import React, { PropsWithChildren } from 'react';

import { Container } from './styles';

const Header = ({ children }: PropsWithChildren<unknown>) => {
  return <Container>{children}</Container>;
};

export default Header;
