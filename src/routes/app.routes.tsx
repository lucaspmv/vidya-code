import React, { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { CustomerRegister } from '../screens/Register/Customer';
import { ProductRegister } from '../screens/Register/Product';
import { SignIn } from '../screens/SignIn';
import { UserRegisterCustomers } from '../screens/Register/User/Customers';
import {
  UserRegisterProducts,
  UserRegisterProductsParams,
} from '../screens/Register/User/Products';
import { UserRegister } from '../screens/Register/User';

import { getItem } from '../services/AsyncStorage';

import { RouteNameEnum } from '../enums/RouteNameEnum';
import { AsyncStorageKeyEnum } from '../enums/AsyncStorageKeyEnum';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onAppLoading = useCallback(async () => {
    const token = await getItem(AsyncStorageKeyEnum.TOKEN);

    if (token) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    onAppLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isLoading ? (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        !isAuthenticated ? RouteNameEnum.SIGN_IN : RouteNameEnum.HOME
      }
    >
      <Screen name={RouteNameEnum.SIGN_IN} component={SignIn} />
      <Screen name={RouteNameEnum.HOME} component={Home} />
      <Screen
        name={RouteNameEnum.CUSTOMER_REGISTER}
        component={CustomerRegister}
      />
      <Screen
        name={RouteNameEnum.PRODUCT_REGISTER}
        component={ProductRegister}
      />
      <Screen
        name={RouteNameEnum.USER_REGISTER_CUSTOMERS}
        component={UserRegisterCustomers}
      />
      <Screen
        name={RouteNameEnum.USER_REGISTER_PRODUCTS}
        component={UserRegisterProducts}
      />
      <Screen name={RouteNameEnum.USER_REGISTER} component={UserRegister} />
    </Navigator>
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

export type AppStackParamList = {
  [RouteNameEnum.SIGN_IN]: undefined;
  [RouteNameEnum.HOME]: undefined;
  [RouteNameEnum.CUSTOMER_REGISTER]: undefined;
  [RouteNameEnum.PRODUCT_REGISTER]: undefined;
  [RouteNameEnum.USER_REGISTER_CUSTOMERS]: undefined;
  [RouteNameEnum.USER_REGISTER_PRODUCTS]: UserRegisterProductsParams;
  [RouteNameEnum.USER_REGISTER]: undefined;
};
