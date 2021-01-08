// @flow
import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { screens } from '../constants';
import type { Category } from '../models';
import { setCurrentCategory } from '../redux/actions/actions';
import CategoryItem from './CategoryItem';

type Props = {
  categories: Array<Category>,
  navigation: any,
};
const CategoriesList = function ({
  categories,
  navigation,
}: Props): React$Node {
  const dispatch = useDispatch();
  const onCategoryPress = (category) => {
    dispatch(setCurrentCategory(category));
    navigation.navigate(screens.categoryMovies);
  };
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem category={item} onPress={onCategoryPress} />
      )}
      columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
      numColumns={2}
      style={{
        width: '90%',
        alignSelf: 'center',
        marginBottom: 80,
      }}
    />
  );
};
export default CategoriesList;
