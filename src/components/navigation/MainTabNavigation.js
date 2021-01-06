// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

const MainTab = function (): React$Node {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'خانه',
          tabBarIcon: () => <Icon name="user" color="black" size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'پروفایل',
          tabBarIcon: () => <Icon name="user" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
