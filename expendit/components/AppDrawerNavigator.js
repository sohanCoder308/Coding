import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import CustomSideBarMenu from './CustomSideBarMenu';
import { AppStackNavigator } from './AppStackNavigator';

import ViewExpenses from '../screens/ViewExpenses';
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackNavigator,
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
