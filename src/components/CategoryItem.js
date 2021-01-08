// @flow
import React from 'react';
import { View } from 'react-native';
import type { Category } from '../models';
import { MText } from './basics';

type Props = {|
  +category: Category,
|};
const CategoryItem = function ({ category }: Props): React$Node {
  return (
    <View style={{ borderWidth: 1 }}>
      <MText>{category.name}</MText>
    </View>
  );
};

export default CategoryItem;
