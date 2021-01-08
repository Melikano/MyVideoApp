// @flow
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { screens } from '../constants';
import type { Category } from '../models';
import { setCurrentCategory } from '../redux/actions';
import { MHeader, MLoader } from './basics';
import CategoryItem from './CategoryItem';
import { strings } from '../constants';

type Props = {
  categories: Array<Category>,
  navigation: any,
};
const CategoriesList = function ({
  categories,
  navigation,
}: Props): React$Node {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const onCategoryPress = (category) => {
    dispatch(setCurrentCategory(category));
    navigation.navigate(screens.categoryMovies);
  };
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => <MHeader title={strings.categories} />}
      ListFooterComponent={() => loading && <MLoader />}
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
