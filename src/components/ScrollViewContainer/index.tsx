import React, { ReactNode } from 'react';

import { CustomScrollView, Container, Content } from './styles';

interface ScrollViewContainerProps {
  children: ReactNode;
}

export function ScrollViewContainer({ children }: ScrollViewContainerProps) {
  return (
    <Container>
      <CustomScrollView>
        <Content>{children}</Content>
      </CustomScrollView>
    </Container>
  );
}
