// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import NavigationBar from './Components/Common/NavigationBar';
// import HomeScreen from './Screens/HomeScreen/HomeScreen';
// import IssueReporterScreen from './Screens/HomeScreen/HomeScreenIssueReporter';

// const Drawer = createDrawerNavigator();

// const AppNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={({navigation}) => ({
//         header: () => <NavigationBar navigation={navigation} />,
//       })}>
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="IssueReporterScreen" component={IssueReporterScreen} />
//       {/* Add more screens here */}
//     </Drawer.Navigator>
//   );
// };

// export default AppNavigator;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationBar from './Components/Common/NavigationBar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import IssueReporterScreen from './Screens/IssueReporterScreen/IssueReporterScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IssueReporter" component={IssueReporterScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        header: () => <NavigationBar navigation={navigation} />,
      })}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="IssueReporter" component={IssueReporterScreen} />
      {/* You can add more drawer items later */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
