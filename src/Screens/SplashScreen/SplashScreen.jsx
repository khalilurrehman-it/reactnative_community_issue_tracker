import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // For navigation

const SplashScreen = () => {
  const navigation = useNavigation();

  // Navigate to Home screen after 3 seconds
  useEffect(() => {
    navigation.replace('HomeScreen'); // Instantly go to Home
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../assets/images/justice_path_logo.png')} // Your app logo
        style={styles.logo}
      />
      {/* <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1622722080795-b6c152e13793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlydHklMjBzb2NpZXR5fGVufDB8MXwwfHx8MA%3D%3D',
        }}
        style={styles.logo}
      /> */}
      <Text style={styles.appName}>Justice Path</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#205084', // Primary color or background color
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 5,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Light text color
  },
});

export default SplashScreen;
