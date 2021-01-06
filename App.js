// @flow
import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/components/navigation/MainTabNavigation';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
