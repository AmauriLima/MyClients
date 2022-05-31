import React from 'react';
import { Text } from 'react-native';

import { ClientData, Container, Name, State, StateText } from './styles';

function Card() {
  return (
    <Container>
      <ClientData>
        <Name>Cliente</Name>
        <State>
          <StateText>PB</StateText>
        </State>
      </ClientData>
      <Text>0</Text>
    </Container>
  );
}

export default Card;
