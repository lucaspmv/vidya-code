import styled from 'styled-components/native';

import { Text } from '../../components/Text';

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 25,
    paddingBottom: 80,
  },
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Text).attrs(() => ({
  size: 24,
  weight: 'bold',
}))`
  margin-bottom: 30px;
`;
