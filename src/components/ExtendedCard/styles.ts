import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  elevation: 1;
`;

export const Content = styled.View`
  background: ${({ theme }) => theme.colors.white};
  width: 80%;
  padding: 16px;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Body = styled.View`
  justify-content: space-between;
`;

export const Address = styled.View``;

export const TextStyled = styled.Text`
  color: ${({ theme }) => theme.colors.gray[700]};
`;
