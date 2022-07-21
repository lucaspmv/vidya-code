import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNameEnum } from '../enums/RouteNameEnum';

import { Home } from '../screens/Home';
import { CustomerRegister } from '../screens/Register/Customer';
import { ProductRegister } from '../screens/Register/Product';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNameEnum.HOME}
    >
      <Screen name={RouteNameEnum.HOME} component={Home} />
      <Screen
        name={RouteNameEnum.CUSTOMER_REGISTER}
        component={CustomerRegister}
      />
      <Screen
        name={RouteNameEnum.PRODUCT_REGISTER}
        component={ProductRegister}
      />
    </Navigator>
  );
}

export type AppStackParamList = {
  [RouteNameEnum.HOME]: undefined;
  [RouteNameEnum.CUSTOMER_REGISTER]: undefined;
  [RouteNameEnum.PRODUCT_REGISTER]: undefined;
};
