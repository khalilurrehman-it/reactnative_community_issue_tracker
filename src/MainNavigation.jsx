// import React, {useEffect} from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {useDispatch, useSelector} from 'react-redux';
// import SplashScreen from './Screens/SplashScreen/SplashScreen'; // wil be used in the future
// import HomeScreen from './Screens/HomeScreen/HomeScreen';
// import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
// import LoginScreen from './Screens/LoginScreen/LoginScreen';
// import {checkUserLoginStatus} from './Redux/Actions/AuthActions';

// const Stack = createStackNavigator();

// const MainNavigation = () => {
//   // const isLoggedIn = useSelector(state => state.isLoggedIn); // ✅ Now safe here
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
//   const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

//   // useEffect(() => {
//   //   dispatch(checkUserLoginStatus());
//   // }, [dispatch]);

//   // useEffect(() => {
//   //   dispatch(checkUserLoginStatus());
//   // }, [dispatch]);

//   if (isAuthLoading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size="large" color="#007cf0" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         {isLoggedIn ? (
//           <>
//             <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignUpScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MainNavigation;



import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

  if (isAuthLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007cf0" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
