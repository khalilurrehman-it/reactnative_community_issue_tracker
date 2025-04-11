import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import MainNavigation from './src/MainNavigation';
import AuthProvider from './src/Redux/Provider/AuthProivder';

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainNavigation /> */}
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    </Provider>
  );
};

export default App;
