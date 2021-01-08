// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { setCurrentCategory } from '../../redux/actions/actions';
import MoviesList from '../MoviesList';

const HomeScreen = function (): React$Node {
  const dispatch = useDispatch();
  useFocusEffect(() => {
    dispatch(setCurrentCategory(''));
  });
  return <MoviesList tag="" />;
};

export default HomeScreen;
