import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../Redux/Actions/AuthActions';
import colors from '../../theme/colors';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);

  const getMessageStyle = () => {
    if (message.toLowerCase().includes('successful')) {
      return {color: 'green'};
    } else {
      return {color: 'red'};
    }
  };

  // const handleSignup = () => {
  //   setMessage('');

  //   if (!email || !password || !confirmPassword) {
  //     setMessage('Please fill in all fields.');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setMessage('Passwords do not match.');
  //     return;
  //   }

  //   if (password.length < 6) {
  //     setMessage('Password must be at least 6 characters long.');
  //     return;
  //   }

  //   dispatch(signup(email, password))
  //     .then(() => {
  //       setMessage('Signup successful! Redirecting to login...');
  //       setTimeout(() => {
  //         navigation.navigate('Login');
  //       }, 1500);
  //     })
  //     .catch(err => {
  //       if (err.code === 'auth/email-already-in-use') {
  //         setMessage('This email is already registered.');
  //       } else if (err.code === 'auth/invalid-email') {
  //         setMessage('Invalid email format.');
  //       } else {
  //         setMessage('Signup failed. Please try again.');
  //       }
  //     });
  // };

  const handleSignup = async () => {
    setMessage('');

    if (!email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    try {
      await dispatch(signup(email, password));
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setMessage('This email is already registered.');
      } else if (err.code === 'auth/invalid-email') {
        setMessage('Invalid email format.');
      } else {
        setMessage('Signup failed. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text style={[styles.message, getMessageStyle()]}>{message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.lightGrayBackground}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, {flex: 1, marginBottom: 0}]}
          placeholder="Password"
          placeholderTextColor={colors.lightGrayBackground}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}>
          <Text style={{color: colors.brandBlue, fontSize: 16, marginLeft: 5}}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, {flex: 1, marginBottom: 0}]}
          placeholder="Re-enter Password"
          placeholderTextColor={colors.lightGrayBackground}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.eyeIcon}>
          <Text style={{color: colors.brandBlue, fontSize: 16, marginLeft: 5}}>
            {showConfirmPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.whiteText} />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGrayBackground,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: colors.brandBlue,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: colors.lightGrayBackground,
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: colors.whiteText,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.successGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: colors.whiteText,
    fontWeight: 'bold',
  },
  link: {
    color: colors.brandBlue,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
  },
  message: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
});

export default SignUpScreen;
