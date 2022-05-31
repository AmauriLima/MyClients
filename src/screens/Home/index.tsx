import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content } from './styles';

import Logo from '@assets/images/logo.svg';
import PageHeader from '@components/PageHeader';
import Card from '@components/Card';

export function Home() {
  return (
    <Container>
      <PageHeader>
        <Logo width={200} />
      </PageHeader>

      <Content>
        <Card />
      </Content>

      <TouchableOpacity onPress={() => Actions.push('details')}>
        <Text>Ir para detalhes</Text>
      </TouchableOpacity>
    </Container>
  );
}
