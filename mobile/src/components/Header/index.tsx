import React, { PropsWithChildren } from 'react';

import { Container, Content } from './styles';

const Header = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Header;
