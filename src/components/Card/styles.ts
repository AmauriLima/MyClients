import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

type IContainer = {
  isLast?: boolean;
};

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  border-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  width: 100%;
`;

export const Container = styled.View<IContainer>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  elevation: 1;
  margin-bottom: ${({ isLast }) => (isLast ? '2px' : '16px')};
`;

export const Content = styled.View`
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const ClientData = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

interface StateProps {
  isLeft?: boolean;
}

export const State = styled.View<StateProps>`
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 0 8px;
  border-radius: 4px;
  margin: ${({ isLeft }) => (isLeft ? '0 8px 0 0' : '0 0 0 8px')};
`;

export const StateText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  font-size: 16px;
`;
