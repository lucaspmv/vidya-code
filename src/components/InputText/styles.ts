import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Text } from '../Text';

export const LabelText = styled(Text).attrs(() => ({
  color: '#4F6772',
}))`
  margin-right: auto;
  margin-bottom: 8px;
  line-height: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: ${RFValue(17)}px;
  padding: 18px;
  color: ${({ theme }) => theme.colors.gray_2};
  background-color: #f9fafb;
  border-width: 1px;
  border-color: #dce2e5;
  border-radius: 8px;
`;
