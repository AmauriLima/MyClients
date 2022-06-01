import { Label, OutlinedButton } from '@screens/Details/styles';
import React from 'react';
import { Text } from 'react-native';

import { Container, Footer, Message } from './styles';

interface Props {
  message: string;
  buttonLabel: string;
  onTryAgain(): void;
}

function ErrorMessage(props: Props) {
  const { buttonLabel, message, onTryAgain } = props;

  return (
    <Container>
      <Message>{message}</Message>

      <Footer>
        <OutlinedButton onPress={onTryAgain}>
          <Label>{buttonLabel}</Label>
        </OutlinedButton>
      </Footer>
    </Container>
  );
}

export default ErrorMessage;
