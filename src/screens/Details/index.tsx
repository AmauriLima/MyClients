import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container } from './styles';

export function Details() {
  return (
    <Container>
      <Text>Detalhes</Text>
      <TouchableOpacity onPress={() => Actions.home()}>
        <Text>Voltar para home</Text>
      </TouchableOpacity>
    </Container>
  );
}
