import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: bold;
  font-size: 18px;
`;

export const Footer = styled.View`
  margin-top: 8px;
`;
