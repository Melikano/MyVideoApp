// @flow
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { screens } from '../constants';
import type { Category } from '../models';
import { setCurrentCategory } from '../redux/actions/actions';
import { MHeader } from './basics';
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
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => <MHeader title="دسته‌بندی‌ها" />}
      renderItem={({ item }) => (
        <CategoryItem category={item} onPress={onCategoryPress} />
      )}
      style={style.categoriesList}
    />
  );
};

const style = StyleSheet.create({
  categoriesList: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 80,
  },
});
export default CategoriesList;
