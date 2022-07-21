import React from 'react';
import { AppProvider } from './src/contexts';

import { Routes } from './src/routes';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
