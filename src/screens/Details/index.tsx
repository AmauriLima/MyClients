import PageHeader from '@components/PageHeader';
import { Client } from '@services/ClientsService/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '@assets/images/logo.svg';
import { Container, Content } from './styles';
import ExtendedCard from '@components/ExtendedCard';

interface Props {
  client: Client;
}

export function Details(props: Props) {
  const { client } = props;

  return (
    <Container>
      <PageHeader>
        <Logo width={200} />
      </PageHeader>

      <Content>
        <ExtendedCard client={client} />
      </Content>

      <TouchableOpacity onPress={() => Actions.home()}>
        <Text>Voltar para home</Text>
      </TouchableOpacity>
    </Container>
  );
}
