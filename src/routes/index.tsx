import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppRoutes, AppStackParamList } from './app.routes';
import { SignIn } from '../screens/SignIn';
import { getItem } from '../services/AsyncStorage';
import { AsyncStorageKeyEnum } from '../enums/AsyncStorageKeyEnum';

export type RoutesParamList = AppStackParamList;

export function Routes() {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  const handleAuthentication = useCallback(async () => {
    const token = await getItem<string>(AsyncStorageKeyEnum.TOKEN);

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handleAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isLoading ? (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={theme.colors.purple} size="large" />
    </View>
  );
}
