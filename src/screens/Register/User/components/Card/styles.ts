import { CaretRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../../../components/Text';

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.4,
}))`
  flex-direction: row;
  align-items: center;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.cyan};
  border-radius: 5px;
`;

export const Border = styled.View`
  width: 3%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cyan};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Customer = styled(Text).attrs(() => ({
  size: 18,
  weight: 'bold',
}))`
  line-height: 26px;
`;

export const Icon = styled(CaretRight).attrs(({ theme }) => ({
  color: theme.colors.cyan,
  size: 25,
  weight: 'bold',
}))``;
