// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { Category } from '../models';
import { MText } from './basics';

type Props = {|
  +category: Category,
  +onPress: Function,
|};
const CategoryItem = function ({ category, onPress }: Props): React$Node {
  return (
    <TouchableOpacity
      style={{ borderWidth: 1 }}
      onPress={() => onPress(category.name)}>
      <MText>{category.name}</MText>
    </TouchableOpacity>
  );
};

export default CategoryItem;
