import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  elevation: 1;
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
  margin-left: 8px;
`;

export const StateText = styled.Text`
  color: #5061fc;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  font-size: 16px;
`;
