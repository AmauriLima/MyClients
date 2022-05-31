import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  children: JSX.Element;
}

function PageHeader(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default PageHeader;
