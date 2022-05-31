import { ClientData, Name, State, StateText } from '@components/Card/styles';
import { Client } from '@services/ClientsService/types';
import React from 'react';
import { Text } from 'react-native';
import Group from './components/Group';

import {
  Address,
  Body,
  Container,
  Content,
  Header,
  TextStyled,
} from './styles';

interface Props {
  client: Client;
}

function ExtendedCard(props: Props) {
  const { client } = props;

  console.log(client);

  return (
    <Container>
      <Content>
        <Header>
          <ClientData>
            <Name>{client.nome}</Name>
            <State>
              <StateText>{client.estado}</StateText>
            </State>
          </ClientData>
          <Text>{client.id}</Text>
        </Header>

        <Body>
          <Group label="E-mail">
            <TextStyled>{client.email}</TextStyled>
          </Group>

          <Group label="Endereço">
            <Address>
              <TextStyled>{client.cidade}</TextStyled>
              <TextStyled>{client.endereco}</TextStyled>
            </Address>
          </Group>

          <Group label="Idade" isLast>
            <TextStyled>{client.idade}</TextStyled>
          </Group>
        </Body>
      </Content>
    </Container>
  );
}

export default ExtendedCard;
