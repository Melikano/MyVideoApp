// @flow
import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import type { FontAwesomeGlyphs } from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import MText from './MText';
import { colors } from '../../constants';

type Props = {|
  +text: string,
  +icon?: FontAwesomeGlyphs,
  +type?: 'fill' | 'outlined' | 'bottomLined',
  +oval?: boolean,
  +disabled?: boolean,
  +loading?: boolean,
  +btnStyle?: Object,
  +onPress: Function,
|};

const MButton = function ({
  text,
  icon,
  oval = false,
  type = 'fill',
  danger = false,
  disabled,
  loading,
  btnStyle,
  onPress,
}: Props): React$Node {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        style.btn,
        style[type],
        disabled && style.disabled,
        oval ? style.oval : style.square,
        btnStyle,
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <>
          {icon && (
            <Icon name={icon} style={[style.icon, style[`${type}Txt`]]} />
          )}
          <MText
            fontStyle={type === 'outlined' ? 'light' : 'medium'}
            textStyle={style[`${type}Txt`]}>
            {text}
          </MText>
        </>
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btn: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fill: {
    backgroundColor: colors.green,
  },
  outlined: {
    borderWidth: 1,
    width: '100%',
    borderColor: colors.green,
  },
  bottomLined: {
    borderBottomWidth: 1,
    borderColor: colors.green,
  },
  fillTxt: {
    marginHorizontal: 5,
    color: colors.white,
  },
  outlinedTxt: {
    marginHorizontal: 5,
    color: colors.green,
  },
  bottomLinedTxt: {
    marginHorizontal: 5,
    color: colors.green,
  },
  oval: {
    borderRadius: 50,
  },
  square: {
    borderRadius: 5,
  },
  icon: {
    fontSize: 20,
    marginTop: 2,
  },
  disabled: {
    backgroundColor: colors.gray,
  },
});

export default MButton;
