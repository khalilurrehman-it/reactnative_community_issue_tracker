import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';

const HomeScreenIssueReporter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Issue Report */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('IssueReporter')}>
        <Icon
          name="bug-outline"
          size={24}
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
          size={24}
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
          size={24}
          color={colors.brandBlue}
          style={styles.icon}
        />
        <Text style={styles.title}>Alert</Text>
        <Text style={styles.description}>
          Urgent alerts and critical messages will appear here.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
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
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: colors.brandBlue,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreenIssueReporter;
