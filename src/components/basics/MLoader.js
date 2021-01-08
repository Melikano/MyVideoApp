// @flow
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../constants';
type Props = {|
  +style?: Object,
|};
const MLoader = function ({ style }: Props): React$Node {
  return <ActivityIndicator color={colors.green} size="large" style={style} />;
};

export default MLoader;
