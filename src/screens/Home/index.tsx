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

import Logo from '@assets/images/logo.svg';
import PageHeader from '@components/PageHeader';

export function Home() {
  return (
    <Container>
      <PageHeader>
        <Logo width={250} />
      </PageHeader>

      <TouchableOpacity onPress={() => Actions.push('details')}>
        <Text>Ir para detalhes</Text>
      </TouchableOpacity>
    </Container>
  );
}
