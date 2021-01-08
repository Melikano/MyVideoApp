// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';
import MText from './MText';

type Props = {|
  title?: string,
  showBack?: boolean,
  onBackPress?: Function,
|};

const MHeader = function ({ title, showBack, onBackPress }: Props): React$Node {
  return (
    <View style={style.header}>
      {showBack && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="angle-right" style={style.backIcon} />
        </TouchableOpacity>
      )}
      <MText textStyle={style.title}>{title}</MText>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row-reverse',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    paddingRight: 10,
  },
  backIcon: {
    fontSize: 30,
    padding: 20,
    color: colors.white,
  },
});

export default MHeader;
