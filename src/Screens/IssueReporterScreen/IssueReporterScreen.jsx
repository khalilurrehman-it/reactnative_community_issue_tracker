import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {db} from '../../firebaseConfig';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import colors from '../../theme/colors';

const IssueReporterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const auth = getAuth();

  const currentUser = auth.currentUser;

  if (!currentUser) {
    Alert.alert('User not logged in!');
    return;
  }

  console.log('User UID:', currentUser.uid); // This should print a real UID

  //   const uid = useSelector(state => state.auth.userId); // assuming stored in redux
  const uid = currentUser?.uid;

  const handleSubmit = async () => {
    if (!name || !email || !phone || !title || !details) {
      Alert.alert('Please fill all the fields');
      return;
    }

    if (!uid) {
      Alert.alert('User ID not found.');
      return;
    }

    try {
      await addDoc(collection(db, 'users', uid, 'issues'), {
        name,
        email,
        phone,
        title,
        details,
        status: 'Pending',
        createdAt: serverTimestamp(),
      });

      Alert.alert('Issue reported successfully');
      setName('');
      setEmail('');
      setPhone('');
      setTitle('');
      setDetails('');
    } catch (error) {
      console.error('Error reporting issue:', error);
      Alert.alert('Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Report an Issue</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Issue Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
        placeholder="Issue Details"
        placeholderTextColor="#888"
        multiline
        value={details}
        onChangeText={setDetails}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Issue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.bgWhite,
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: colors.brandBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: colors.brandBlue,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.whiteText,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IssueReporterScreen;
