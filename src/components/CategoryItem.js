// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import type { Category } from '../models';
import { MButton } from './basics';

type Props = {|
  +category: Category,
  +onPress: Function,
|};
const CategoryItem = function ({ category, onPress }: Props): React$Node {
  const { name } = category;
  return (
    <MButton
      text={name}
      type="bottomLined"
      icon="angle-right"
      btnStyle={style.categoryItem}
      onPress={() => onPress(name)}
    />
  );
};
const style = StyleSheet.create({
  categoryItem: {
    marginVertical: 10,
    flexDirection: 'row-reverse',
  },
});
export default CategoryItem;
