import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, SpinnerWrapper } from './styles';

import Logo from '@assets/images/logo.svg';
import PageHeader from '@components/PageHeader';
import Card from '@components/Card';

import ClientsService from '@services/ClientsService';
import { Client } from '@services/ClientsService/types';
import { Button } from '@components/Card/styles';
import Spinner from '@components/Spinner';
import ErrorMessage from '@components/ErrorMessage';

interface RenderCardProps {
  item: Client;
  index: number;
}

export function Home() {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await ClientsService.listClients();
      setClients(response.clientes);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function renderCard(props: RenderCardProps) {
    const { item, index } = props;

    return <Card client={item} isLast={index === clients.length - 1} />;
  }

  function renderFlatlist() {
    if (isLoading) {
      return (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      );
    }

    if (!isLoading && hasError) {
      return (
        <ErrorMessage
          buttonLabel="Tentar novamente"
          message="Ocorreu um erro ao obter os seus clientes!"
          onTryAgain={loadClients}
        />
      );
    }

    return (
      <FlatList
        keyExtractor={(client) => String(client.id)}
        data={clients}
        renderItem={renderCard}
      />
    );
  }

  return (
    <Container>
      <PageHeader>
        <Logo width={200} />
      </PageHeader>

      <Content>{renderFlatlist()}</Content>
    </Container>
  );
}
