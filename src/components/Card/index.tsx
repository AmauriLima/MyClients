import { Screens } from '@screens/types';
import { Client } from '@services/ClientsService/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

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

  function handleClick() {
    Actions.push(Screens.DETAILS, {
      client,
    });
  }

  return (
    <Container isLast={isLast}>
      <Button onPress={handleClick}>
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
