// @flow
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, Button, Text } from 'react-native';
import { getToken } from '../../redux/actions/actions';

const Profile = function (): React$Node {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const [user, setUser] = useState({ username: '', password: '' });
  const submit = () => {
    dispatch(getToken(user));
  };
  return (
    <View>
      <TextInput
        value={user.username}
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        value={user.password}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button title="submit" onPress={submit} />
      <Text>{status}</Text>
    </View>
  );
};

export default Profile;
