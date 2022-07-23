import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CustomScrollView = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const Content = styled.View`
  padding: 40px 25px 80px;
`;
