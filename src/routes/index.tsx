import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes, AppStackParamList } from './app.routes';
import { SignIn } from '../screens/SignIn';

export type RoutesParamList = AppStackParamList;

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
      {/* <SignIn /> */}
    </NavigationContainer>
  );
}
