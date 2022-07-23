import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextProps {
  weight?: 'bold' | 'regular';
  size?: number;
  color?: string;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight = 'regular' }) =>
    weight === 'bold' ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: ${({ size }) =>
    size ? `${RFValue(size)}px` : `${RFValue(16)}px`};
  color: ${({ color, theme }) => color ?? theme.colors.gray5};
`;
