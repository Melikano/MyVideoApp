// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, screens } from '../../constants';

const SplashScreen = function ({ navigation }: any): React$Node {
  setTimeout(() => {
    navigation.navigate(screens.mainTab.name);
  }, 3000);

  return (
    <View style={style.container}>
      <Text style={style.text}>hellooo</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
  },
});
export default SplashScreen;
