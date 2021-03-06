import PageHeader from '@components/PageHeader';
import { Client } from '@services/ClientsService/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '@assets/images/logo.svg';
import { Container, Content, Footer, Label, OutlinedButton } from './styles';
import ExtendedCard from '@components/ExtendedCard';

interface Props {
  client: Client;
}

export function Details(props: Props) {
  const { client } = props;

  function handleGoHome() {
    Actions.home();
  }

  return (
    <Container>
      <PageHeader>
        <Logo width={200} />
      </PageHeader>

      <Content>
        <ExtendedCard client={client} />
      </Content>

      <Footer>
        <OutlinedButton onPress={handleGoHome}>
          <Label>Voltar</Label>
        </OutlinedButton>
      </Footer>
    </Container>
  );
}
