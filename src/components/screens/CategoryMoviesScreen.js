// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from '../MoviesList';

const CategoryMoviesScreen = function (): React$Node {
  const category = useSelector((state) => state.category);
  return <MoviesList tag={category} categorized />;
};

export default CategoryMoviesScreen;
