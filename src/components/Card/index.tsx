import { Client } from '@services/ClientsService/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {
  Button,
  ClientData,
  Container,
  Content,
  Name,
  State,
  StateText,
} from './styles';

interface Props {
  isLast?: boolean;
  client: Client;
}

function Card(props: Props) {
  const { isLast, client } = props;

  return (
    <Container isLast={isLast}>
      <Button onPress={() => console.log(client)}>
        <Content>
          <ClientData>
            <State>
              <StateText>{client.estado}</StateText>
            </State>
            <Name>{client.nome}</Name>
          </ClientData>
          <Text>{client.id}</Text>
        </Content>
      </Button>
    </Container>
  );
}

export default Card;
