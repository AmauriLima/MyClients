import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content } from './styles';

import Logo from '@assets/images/logo.svg';
import PageHeader from '@components/PageHeader';
import Card from '@components/Card';

import ClientsService from '@services/ClientsService';
import { Client } from '@services/ClientsService/types';
import { Button } from '@components/Card/styles';

interface RenderCardProps {
  item: Client;
  index: number;
}

export function Home() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    const response = await ClientsService.listClients();

    setClients(response.clientes);
  }

  function renderCard(props: RenderCardProps) {
    const { item, index } = props;

    return <Card client={item} isLast={index === clients.length - 1} />;
  }

  return (
    <Container>
      <PageHeader>
        <Logo width={200} />
      </PageHeader>

      <Content>
        <FlatList
          keyExtractor={(client) => String(client.id)}
          data={clients}
          renderItem={renderCard}
        />
      </Content>
    </Container>
  );
}
