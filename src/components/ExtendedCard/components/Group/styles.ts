import styled from 'styled-components/native';

export const Container = styled.View<{ isLast?: boolean }>`
  margin-bottom: ${({ isLast }) => (isLast ? '0' : '16px')};
  background-color: #f7f7f7;
  padding: 8px;
  border-radius: 4px;
`;

export const Content = styled.View``;

export const LabelBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface LineProps {
  extended?: boolean;
}

export const Line = styled.View<LineProps>`
  flex: ${({ extended }) => (extended ? 1 : 0)};
  min-width: 8px;
  height: 1px;
  background-color: #bcbcbc;
  margin-left: ${({ extended }) => (extended ? '4px' : '0')};
  margin-right: ${({ extended }) => (extended ? '0' : '4px')};
`;

export const Label = styled.Text`
  font-weight: bold;
`;
