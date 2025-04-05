import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import MainNavigation from './src/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
