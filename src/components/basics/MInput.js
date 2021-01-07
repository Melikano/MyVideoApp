// @flow
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fonts } from '../../constants';

type Props = {
  value: string,
  label?: string,
  ltr?: boolean,
  placeholder?: string,
  onChangeText: Function,
  inputStyle?: Object,
};
const MInput = function ({
  value,
  label,
  ltr,
  placeholder,
  onChangeText,
  inputStyle,
  ...props
}: Props): React$Node {
  const [focused, setFocused] = useState(false);
  return (
    <View style={inputStyle}>
      {label && focused && <Text style={style.label}>{label}</Text>}
      <TextInput
        value={value}
        style={[
          inputStyle,
          style.input,
          focused && style.focusedStyle,
          ltr && (focused || value) && style.ltr,
        ]}
        placeholder={placeholder || (!focused ? label : '')}
        placeholderTextColor={colors.gray}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...(props: any)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    color: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.white,
    fontFamily: fonts.medium,
    paddingBottom: 5,
    textAlign: 'right',
  },
  ltr: {
    textAlign: 'left',
  },
  focusedStyle: {
    borderColor: colors.green,
  },
  label: {
    fontFamily: fonts.medium,
    color: colors.gray,
  },
});

export default MInput;
