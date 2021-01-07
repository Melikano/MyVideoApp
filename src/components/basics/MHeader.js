// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';

type Props = {|
  title?: string,
  showBack?: boolean,
  onBackPress?: Function,
|};

const MHeader = function ({ title, showBack, onBackPress }: Props): React$Node {
  return (
    <View style={style.header}>
      <Text>{title}</Text>
      {showBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="angle-right" style={style.backIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 30,
    flexDirection: 'row-reverse',
  },
  backIcon: {
    fontSize: 30,
    padding: 20,
    color: colors.white,
  },
});

export default MHeader;
