import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootNavigation from './src/navigation/rootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
