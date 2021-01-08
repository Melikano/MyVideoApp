// @flow

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/actions';
import CategoriesList from '../CategoriesList';
import { MLoader } from '../basics';

const CategoriesScreen = function ({ navigation }: any): React$Node {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return loading ? (
    <MLoader />
  ) : (
    <CategoriesList categories={categories} navigation={navigation} />
  );
};

export default CategoriesScreen;
