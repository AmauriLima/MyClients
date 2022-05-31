import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f6f5fc;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

export const OutlinedButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border: 2px solid #5061fc;
  padding: 8px 16px;
  border-radius: 16px;
`;

export const Label = styled.Text`
  color: #5061fc;
  font-weight: bold;
`;
