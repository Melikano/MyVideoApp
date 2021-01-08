// @flow
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/components/navigation/MainNavigation';
import { colors } from './src/constants';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={{ colors: { background: colors.black } }}>
        <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
