// @flow

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../../redux/actions/actions';

import MainTabNavigation from './MainTabNavigation';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import { screens } from '../../constants';

const Stack = createStackNavigator();

const MainNavigation = function (): React$Node {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokenFromLocalStorage());
    dispatch(getUserFromLocalStorage());
  }, [dispatch]);

  const { mainTab, login, splash } = screens;
  return (
    <Stack.Navigator
      initialRouteName={splash.name}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={splash.name} component={SplashScreen} />
      <Stack.Screen name={mainTab.name} component={MainTabNavigation} />
      <Stack.Screen name={login.name} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
