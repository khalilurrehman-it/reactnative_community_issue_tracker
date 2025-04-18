// import React from 'react';
// import {
//   StyleSheet,
//   StatusBar,
//   ScrollView,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import colors from '../../theme/colors';
// import HomeScreenIssueReporter from './HomeScreenIssueReporter';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor={colors.brandBlue} barStyle="light-content" />
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <HomeScreenIssueReporter />
//       </ScrollView>
//     </SafeAreaView>
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
// });

// export default HomeScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.brandBlue} barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Issue Report */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('IssueReporterScreen')}>
          <Icon
            name="bug-outline"
            size={28} // Adjusted icon size for consistency
            color={colors.brandBlue}
            style={styles.icon}
          />
          <Text style={styles.title}>Issue Report</Text>
          <Text style={styles.description}>
            Report a technical issue or bug you’re facing.
          </Text>
        </TouchableOpacity>

        {/* Notice Board */}
        <TouchableOpacity style={styles.card}>
          <Icon
            name="clipboard-outline"
            size={28} // Adjusted icon size for consistency
            color={colors.brandBlue}
            style={styles.icon}
          />
          <Text style={styles.title}>Notice Board</Text>
          <Text style={styles.description}>
            Stay updated with the latest notices and announcements.
          </Text>
        </TouchableOpacity>

        {/* Alert */}
        <TouchableOpacity style={styles.card}>
          <Icon
            name="alert-circle-outline"
            size={28} // Adjusted icon size for consistency
            color={colors.brandBlue}
            style={styles.icon}
          />
          <Text style={styles.title}>Alert</Text>
          <Text style={styles.description}>
            Urgent alerts and critical messages will appear here.
          </Text>
        </TouchableOpacity>
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
  card: {
    backgroundColor: colors.whiteText,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 4,
    marginBottom: 16, // Added consistent margin between cards
    width: '90%', // Ensures consistent width for all cards
    alignItems: 'center', // Centers content inside the card
  },
  icon: {
    marginBottom: 12, // Adjusted margin for better spacing
  },
  title: {
    fontSize: 18, // Consistent font size
    fontWeight: '600', // Consistent font weight
    marginBottom: 6, // Consistent spacing from description
    color: colors.brandBlue,
  },
  description: {
    fontSize: 14, // Consistent font size
    color: '#555', // Consistent color for text
    textAlign: 'center', // Align text to center for better look
  },
});

export default HomeScreen;
