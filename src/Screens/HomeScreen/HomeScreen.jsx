import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import colors from '../../theme/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.brandBlue} barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>🎨 Color Preview</Text>
        <Image
          source={require('../../assets/images/justice_path_logo.png')} // Your app logo
          style={styles.logo}
        />
        {Object.entries(colors).map(([name, hex]) => (
          <View key={name} style={[styles.colorBox, {backgroundColor: hex}]}>
            <Text
              style={[
                styles.colorText,
                {
                  color: name.includes('background')
                    ? colors.darkGrayText
                    : colors.whiteText,
                },
              ]}>
              {name} - {hex}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrayBackground,
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.brandBlue,
    marginBottom: 50,
  },
  colorBox: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  colorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default HomeScreen;
