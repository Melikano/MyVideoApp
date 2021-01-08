// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants';

type Props = {|
  +square?: boolean,
  +color?: string,
  +badgeStyle: Object,
  +children?: any,
|};

const MBadge = function ({
  square,
  color = colors.green,
  badgeStyle,
  children,
}: Props): React$Node {
  return (
    <View
      style={[
        { backgroundColor: color },
        style.badge,
        square && style.square,
        badgeStyle,
      ]}>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  badge: {
    height: null,
    width: null,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 100,
  },
  square: {
    borderRadius: 5,
  },
});

export default MBadge;
