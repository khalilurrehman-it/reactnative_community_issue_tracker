import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationBar from './Components/Common/NavigationBar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import IssueReporterScreen from './Screens/IssueReporterScreen/IssueReporterScreen';
import MyReportedIssuesScreen from './Screens/MyReportedIssuesScreen/MyReportedIssuesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IssueReporterScreen" component={IssueReporterScreen} />
      <Stack.Screen name="MyReportedIssuesScreen" component={MyReportedIssuesScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        header: () => <NavigationBar navigation={navigation} />,
      })}>
      <Drawer.Screen name="Home Page" component={HomeStack} />
      <Drawer.Screen name="Issue Reporter" component={IssueReporterScreen} />
      {/* <Drawer.Screen name="My Reported Issues" component={MyReportedIssuesScreen} /> */}
      {/* You can add more drawer items later */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
