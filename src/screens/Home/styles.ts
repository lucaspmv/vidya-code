import styled from 'styled-components/native';

import { Text } from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  padding: 40px 25px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Text).attrs(() => ({
  size: 24,
  weight: 'bold',
}))`
  margin-bottom: 30px;
`;
