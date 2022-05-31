import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

type IContainer = {
  isLast?: boolean;
};

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  border-color: #fff;
  flex: 1;
  width: 100%;
`;

export const Container = styled.View<IContainer>`
  background-color: #fff;
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

export const State = styled.View`
  background-color: #e0e3ff;
  padding: 0 8px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const StateText = styled.Text`
  color: #5061fc;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  font-size: 16px;
`;
