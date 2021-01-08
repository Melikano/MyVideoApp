// @flow

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/actions';
import { MText } from '../basics';
import CategoriesList from '../CategoriesList';

const CategoriesScreen = function (): React$Node {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  });

  return <CategoriesList categories={categories} />;
};

export default CategoriesScreen;
