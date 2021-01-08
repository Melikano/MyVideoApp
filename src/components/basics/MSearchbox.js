// @flow
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors, fonts } from '../../constants';

type Props = {|
  +placeholder?: string,
  +onChangeText: Function,
|};
const MSearchbox = function ({
  placeholder = 'جستجو...',
  onChangeText,
  ...props
}: Props): React$Node {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={style.searchbox}
        placeholderTextColor={colors.lightGray}
        onChangeText={onChangeText}
        {...(props: any)}
      />
      <Icon name="search1" color={colors.lightGray} style={style.searchIcon} />
    </View>
  );
};

const style = StyleSheet.create({
  searchbox: {
    width: '90%',
    alignSelf: 'center',
    color: colors.white,
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: colors.darkGray,
    fontFamily: fonts.medium,
    paddingHorizontal: 20,
    paddingLeft: 45,
  },
  searchIcon: {
    position: 'absolute',
    fontSize: 20,
    top: 35,
    left: 35,
  },
});
export default MSearchbox;
