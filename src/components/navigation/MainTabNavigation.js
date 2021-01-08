// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesStack from './CategoriesStack';
import { colors, fonts, screens } from '../../constants';

const Tab = createBottomTabNavigator();

const MainTab = function (): React$Node {
  const { profile, home, categoriesStack } = screens;
  return (
    <Tab.Navigator
      initialRouteName={home.name}
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.gray,
        style: style.tabBar,
      }}>
      <Tab.Screen
        name={profile.name}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={[style.tabBarItem, { color }]}>
              {profile.tabLabel}
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name={profile.tabIcon} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={categoriesStack.name}
        component={CategoriesStack}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={[style.tabBarItem, { color }]}>
              {categoriesStack.tabLabel}
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name={categoriesStack.tabIcon} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={home.name}
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={[style.tabBarItem, { color }]}>{home.tabLabel}</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name={home.tabIcon} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkGray,
    position: 'absolute',
    height: 65,
    paddingTop: 8,
    elevation: 30,
  },
  tabBarItem: {
    fontFamily: fonts.light,
    fontSize: 12,
    paddingBottom: 8,
  },
});
export default MainTab;
