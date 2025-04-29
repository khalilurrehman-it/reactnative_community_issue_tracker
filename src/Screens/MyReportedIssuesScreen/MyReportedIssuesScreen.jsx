import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import {auth, db} from '../../firebaseConfig';
import colors from '../../theme/colors';

const MyReportedIssuesScreen = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [issuesText, setIssuesText] = useState(''); // Store the issues as a string

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error('User not logged in');
      return;
    }

    setUserEmail(currentUser.email);
  }, []);

  useEffect(() => {
    if (!userEmail) return;

    const issuesCollection = collection(
      db,
      `users/${auth.currentUser.uid}/issues`,
    );
    const q = query(
      issuesCollection,
      where('email', '==', userEmail),
      orderBy('createdAt', 'desc'),
    );

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const issuesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Create a text format for displaying issues
      const issuesString = issuesData
        .map(
          (issue) =>
            `Your Issue: ${issue.title}\nDetails: ${issue.details}\nStatus: ${issue.status}\nReported by: ${issue.name}\nPhone: ${issue.phone}\nDate: ${issue.createdAt.toDate().toLocaleString()}\n\n`
        )
        .join('');

      setIssuesText(issuesString); // Update the issuesText state with formatted string
      setIssues(issuesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userEmail]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.brandBlue} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.issuesText}>{issuesText}</Text> {/* Display issues text */}
      <FlatList
        data={issues}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}>Your Issue: {item.title}</Text>
            <Text style={styles.detail}>Details of the issue: {item.details}</Text>
            <Text style={styles.meta}>Status: {item.status}</Text>
            <Text style={styles.meta}>Reported by: {item.name}</Text>
            <Text style={styles.meta}>Phone: {item.phone}</Text>
            <Text style={styles.meta}>
              Date: {item.createdAt.toDate().toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text>No issues reported yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  issuesText: {
    fontSize: 14,
    marginBottom: 20,
    color: '#555',
    whiteSpace: 'pre-line', // To preserve newlines in the issuesText string
  },
  listContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: colors.whiteText,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brandBlue,
  },
  detail: {
    fontSize: 14,
    marginTop: 6,
  },
  meta: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
});

export default MyReportedIssuesScreen;
