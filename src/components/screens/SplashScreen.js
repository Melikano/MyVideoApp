// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors, screens } from '../../constants';

const SplashScreen = function ({ navigation }: any): React$Node {
  setTimeout(() => {
    navigation.navigate(screens.mainTab.name);
  }, 3000);

  return (
    <View style={style.container}>
      <Icon name="videocamera" color={colors.green} size={72} />
      <Text style={style.text}>My Video App</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  text: {
    color: colors.green,
    fontSize: 36,
  },
});
export default SplashScreen;
