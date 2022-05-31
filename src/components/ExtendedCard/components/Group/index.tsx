import React from 'react';

import { Container, Content, Label, LabelBox, Line } from './styles';

interface Props {
  label: string;
  children: JSX.Element;
  isLast?: boolean;
}

function Group(props: Props) {
  const { label, children, isLast } = props;

  return (
    <Container isLast={isLast}>
      <LabelBox>
        <Line />
        <Label>{label}</Label>
        <Line extended />
      </LabelBox>

      <Content>{children}</Content>
    </Container>
  );
}

export default Group;
