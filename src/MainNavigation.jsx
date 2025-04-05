import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from './Screens/SplashScreen/SplashScreen'; // wil be used in the future
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import {checkUserLoginStatus} from './Redux/Actions/AuthActions';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn); // ✅ Now safe here
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserLoginStatus());
  }, [dispatch]);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Signup" component={SignUpScreen} />
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     {isLoggedIn ? (
    //       // If logged in, show the HomeScreen and other screens
    //       <>
    //         <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //         {/* Add other screens that the user can access after login */}
    //       </>
    //     ) : (
    //       // If not logged in, only allow access to Login and SignUp screens
    //       <>
    //         <Stack.Screen name="Login" component={LoginScreen} />
    //         <Stack.Screen name="Signup" component={SignUpScreen} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
