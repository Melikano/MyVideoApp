// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { screens } from '../../constants';
import MoviesList from '../MoviesList';

const CategoryMoviesScreen = function ({ navigation }: any): React$Node {
  const category = useSelector((state) => state.category);
  return (
    <MoviesList
      tag={category}
      categorized
      navigateToCategories={() => navigation.navigate(screens.categories)}
    />
  );
};

export default CategoryMoviesScreen;
