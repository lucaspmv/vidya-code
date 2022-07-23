import styled from 'styled-components/native';
import { PlusCircle, UserCircleGear, UserCircle } from 'phosphor-react-native';
import { Text } from '../../../../components/Text';

interface ContainerProps {
  type: 'customer' | 'product' | 'user';
  isActive: boolean;
}

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))<ContainerProps>`
  padding: 30px 20px;
  border-width: 1px;
  border-color: ${({ type, isActive, theme }) => {
    if (isActive) {
      if (type === 'customer') {
        return theme.colors.purple;
      }
      if (type === 'product') {
        return theme.colors.blue;
      }
      return theme.colors.cyan;
    }
    return theme.colors.gray3;
  }};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const NewCustomerIcon = styled(UserCircleGear).attrs(({ theme }) => ({
  color: theme.colors.purple,
  size: 60,
  weight: 'bold',
}))``;

export const NewProductIcon = styled(PlusCircle).attrs(({ theme }) => ({
  color: theme.colors.blue,
  size: 60,
  weight: 'bold',
}))``;

export const NewUserIcon = styled(UserCircle).attrs(({ theme }) => ({
  color: theme.colors.cyan,
  size: 60,
  weight: 'bold',
}))``;

export const Title = styled(Text).attrs(() => ({
  size: 22,
  weight: 'bold',
}))`
  margin-left: 30px;
`;
