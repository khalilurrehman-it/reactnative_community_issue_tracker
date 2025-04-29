import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const NavigationBar = ({navigation, title}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation?.openDrawer()}>
        <Icon name="menu" size={28} color={colors.whiteText} />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/community_issue_tracker.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{width: 28}} /> {/* Spacer to balance layout */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: colors.brandBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    height: 30,
    width: 120,
  },
});

export default NavigationBar;
