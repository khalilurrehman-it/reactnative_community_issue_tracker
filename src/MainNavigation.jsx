import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

  if (isAuthLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#007cf0" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppNavigator />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
