import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.colors.white};
  width: 80%;
  border-radius: 8px;
  elevation: 3;
  padding: 4px 16px;
`;
