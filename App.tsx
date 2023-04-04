import {View, Text} from 'react-native';
import React from 'react';
import MainNav from './src/Navigation/MainNav';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
};

export default App;
