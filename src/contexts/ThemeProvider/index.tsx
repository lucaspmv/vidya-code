import React, { ReactNode } from 'react';
import { ThemeProvider as NativeThemeProvider } from 'styled-components/native';

import theme from '../../theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <NativeThemeProvider theme={theme}>{children}</NativeThemeProvider>;
}
