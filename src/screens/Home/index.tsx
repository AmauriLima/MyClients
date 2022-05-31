import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Text>Pagina Inicial</Text>
      <TouchableOpacity onPress={() => Actions.push('details')}>
        <Text>Ir para detalhes</Text>
      </TouchableOpacity>
    </Container>
  );
}
