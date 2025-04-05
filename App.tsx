// import React from 'react';
// import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
// import colors from './src/theme/colors';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={colors.brandBlue} barStyle="light-content" />
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <Text style={styles.header}>🎨 Color Preview</Text>
//         {Object.entries(colors).map(([name, hex]) => (
//           <View key={name} style={[styles.colorBox, {backgroundColor: hex}]}>
//             <Text
//               style={[
//                 styles.colorText,
//                 {
//                   color: name.includes('background')
//                     ? colors.darkGrayText
//                     : colors.whiteText,
//                 },
//               ]}>
//               {name} - {hex}
//             </Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.lightGrayBackground,
//   },
//   scrollView: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: colors.brandBlue,
//     marginBottom: 50,
//   },
//   colorBox: {
//     width: '90%',
//     paddingVertical: 15,
//     borderRadius: 8,
//     marginVertical: 8,
//     alignItems: 'center',
//   },
//   colorText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import HomeScreen from './src/Screens/HomeSceen/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
