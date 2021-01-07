// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';
import { MButton, MText } from '../basics';
import { colors, screens, strings, images } from '../../constants';

const Profile = function ({ navigation }: any): React$Node {
  const status = useSelector((state) => state.status);
  const user = useSelector((state) => state.user);

  return (
    <View style={style.profile}>
      <View style={style.avatarContainer}>
        <Image source={images.avatar[status]} style={style.avatar} />
        {status === 'unAuthorized' ? (
          <MButton
            text={strings.loginToAccount}
            icon="angle-left"
            onPress={() => {
              navigation.navigate(screens.login.name);
            }}
            btnStyle={style.signInBtn}
          />
        ) : (
          <MText textStyle={style.usernameTxt}>{`@${user.username}`}</MText>
        )}
      </View>

      {status === 'authorized' && (
        <View>
          <MButton
            text={strings.favourits}
            type="bottomLined"
            icon="angle-left"
            onPress={() => {}}
            btnStyle={style.listItem}
          />
          <MButton
            text={strings.watched}
            type="bottomLined"
            icon="angle-left"
            onPress={() => {}}
            btnStyle={style.listItem}
          />
        </View>
      )}

      <View>
        <MButton
          text={strings.contactWithSupport}
          icon="envelope-o"
          type="outlined"
          onPress={() => {}}
          btnStyle={style.listItem}
        />
        <MButton
          text={strings.aboutUs}
          icon="info-circle"
          type="outlined"
          onPress={() => {}}
          btnStyle={style.listItem}
        />
        {status === 'authorized' && (
          <MButton
            text={strings.logout}
            icon="sign-out"
            type="outlined"
            onPress={() => {}}
            btnStyle={style.listItem}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  profile: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: 'center',
    width: '100%',
    height: 250,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  signInBtn: {
    position: 'absolute',
    width: '60%',
    top: '93%',
  },
  usernameTxt: {
    fontSize: 20,
  },
  listItem: {
    marginTop: 10,
  },
});

export default Profile;