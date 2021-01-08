// @flow

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../constants';

type Props = {
  fontStyle?: 'bold' | 'medium' | 'light',
  variant?: 'error' | 'success' | 'normal',
  textStyle?: Object,
  children?: any,
};

const MText = function ({
  fontStyle = 'medium',
  variant = 'normal',
  textStyle = {},
  children,
  ...props
}: Props): React$Node {
  return (
    <Text
      style={[style[fontStyle], style[variant], textStyle]}
      {...(props: any)}>
      {children}
    </Text>
  );
};

const style = StyleSheet.create({
  medium: {
    fontFamily: fonts.medium,
  },
  bold: {
    fontFamily: fonts.bold,
  },
  light: {
    fontFamily: fonts.light,
  },
  error: {
    color: colors.red,
  },
  success: {
    color: colors.green,
  },
  normal: {
    color: colors.white,
  },
});

export default MText;
