// @flow
import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/actions';
import getErrorMessage from '../../utils/errorHandler';
import { MButton, MInput, MHeader, MText } from '../basics';
import { screens, strings } from '../../constants';

const Login = function ({ navigation }: any): React$Node {
  const [user, setUser] = useState({ username: '', password: '' });
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleLoginPress = () => {
    dispatch(
      login(user, () => {
        navigation.navigate(screens.profile.name);
      }),
    );
  };

  const errorMessage = getErrorMessage(error);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <MHeader showBack onBackPress={() => navigation.navigate('PROFILE')} />
        <View style={style.inputsContainer}>
          <MInput
            value={user.username}
            label={strings.username}
            ltr
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <MInput
            value={user.password}
            label={strings.password}
            ltr
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </View>
        {error && (
          <View style={style.errorContainer}>
            <MText variant="error">{errorMessage}</MText>
          </View>
        )}
        <MButton
          text={strings.login}
          oval
          disabled={!user.username || !user.password}
          loading={loading}
          onPress={handleLoginPress}
          btnStyle={style.signInBtn}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
  },
  inputsContainer: {
    width: '70%',
    height: '30%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  passwordInput: {
    textAlign: 'right',
  },
  errorContainer: {
    alignItems: 'center',
  },
  signInBtn: {
    width: '70%',
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Login;
