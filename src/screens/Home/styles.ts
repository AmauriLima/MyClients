import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px 24px;
`;
