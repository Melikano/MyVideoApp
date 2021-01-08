// @flow
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryMoviesScreen from '../screens/CategoryMoviesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import { screens } from '../../constants';

const CategoryStack = createStackNavigator();

const CategoriesStack = function (): React$Node {
  const { categoryMovies, categories } = screens;
  return (
    <CategoryStack.Navigator
      initialRouteName={categories.name}
      screenOptions={{
        headerShown: false,
      }}>
      <CategoryStack.Screen
        name={categoryMovies.name}
        component={CategoryMoviesScreen}
      />
      <CategoryStack.Screen
        name={categories.name}
        component={CategoriesScreen}
      />
    </CategoryStack.Navigator>
  );
};

export default CategoriesStack;
