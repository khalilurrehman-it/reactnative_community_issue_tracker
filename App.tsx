import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import MainNavigation from './src/MainNavigation';
import AuthProvider from './src/Redux/Provider/AuthProivder';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AuthProvider>
          <MainNavigation />
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
