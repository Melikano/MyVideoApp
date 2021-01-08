// @flow

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/actions';
import CategoriesList from '../CategoriesList';

const CategoriesScreen = function ({ navigation }: any): React$Node {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <CategoriesList categories={categories} navigation={navigation} />;
};

export default CategoriesScreen;
