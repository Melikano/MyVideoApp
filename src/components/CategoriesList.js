// @flow

import React from 'react';
import { FlatList } from 'react-native';
import type { Category } from '../models';
import CategoryItem from './CategoryItem';

type Props = {
  categories: Array<Category>,
};
const CategoriesList = function ({ categories }: Props): React$Node {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryItem category={item} />}
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
