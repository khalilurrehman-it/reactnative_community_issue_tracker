// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {login} from '../../Redux/Actions/AuthActions';
// import colors from '../../theme/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const LoginScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();
//   const {loading} = useSelector(state => state.auth);

//   const getMessageStyle = () => {
//     if (message.includes('successful')) {
//       return {color: 'green'}; // success color
//     } else if (message.includes('failed')) {
//       return {color: 'red'}; // error color
//     }
//     return {color: 'red'}; // default color
//   };

//   const handleLogin = () => {
//     setMessage(''); // Clear previous messages

//     if (!email || !password) {
//       setMessage('Please enter both email and password.');
//       return;
//     }

//     dispatch(login(email, password))
//       .then(() => {
//         setMessage('Login successful! Redirecting...');
//         navigation.navigate('HomeScreen');
//       })
//       .catch(err => {
//         let errorMessage = 'Login failed. Please try again later.';
//         if (err.code === 'auth/user-not-found') {
//           errorMessage = 'No account found with this email.';
//         } else if (err.code === 'auth/wrong-password') {
//           errorMessage = 'Incorrect password. Please try again.';
//         } else if (err.code === 'auth/invalid-email') {
//           errorMessage = 'Please enter a valid email address.';
//         }
//         setMessage(errorMessage);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <Text style={[styles.message, getMessageStyle()]}>{message}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor={colors.lightGrayBackground}
//         value={email}
//         onChangeText={setEmail}
//       />

//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={[styles.input, {flex: 1, marginBottom: 0}]}
//           placeholder="Password"
//           placeholderTextColor={colors.lightGrayBackground}
//           secureTextEntry={!showPassword}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={styles.eyeIcon}>
//           <Text style={{color: colors.brandBlue, fontSize: 16, marginLeft: 5}}>
//             {showPassword ? 'Hide' : 'Show'}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleLogin}
//         disabled={loading}>
//         {loading ? (
//           <ActivityIndicator size="small" color={colors.whiteText} />
//         ) : (
//           <Text style={styles.buttonText}>Login</Text>
//         )}
//       </TouchableOpacity>

//       <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
//         Don't have an account? Sign up
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.lightGrayBackground,
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     color: colors.brandBlue,
//   },
//   input: {
//     height: 50,
//     width: '100%',
//     borderColor: colors.lightGrayBackground,
//     borderWidth: 1.5,
//     borderRadius: 10,
//     marginBottom: 15,
//     paddingLeft: 15,
//     fontSize: 16,
//     backgroundColor: colors.whiteText,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: colors.successGreen,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: colors.whiteText,
//     fontWeight: 'bold',
//   },
//   link: {
//     color: colors.brandBlue,
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 15,
//   },
//   message: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//   },
// });

// export default LoginScreen;


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
import {login} from '../../Redux/Actions/AuthActions';
import colors from '../../theme/colors';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);

  const getMessageStyle = () => {
    if (message.includes('successful')) return {color: 'green'};
    return {color: 'red'};
  };

  const handleLogin = () => {
    setMessage('');

    if (!email || !password) {
      setMessage('Please enter both email and password.');
      return;
    }

    dispatch(login(email, password))
      .then(() => {
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          // navigation.navigate('HomeScreen');
        }, 1000); // Wait 1 second to let user read the message
      })
      .catch(err => {
        let errorMessage = 'Login failed. Please try again later.';
        if (err.code === 'auth/user-not-found') {
          errorMessage = 'No account found with this email.';
        } else if (err.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password. Please try again.';
        } else if (err.code === 'auth/invalid-email') {
          errorMessage = 'Please enter a valid email address.';
        }
        setMessage(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={[styles.message, getMessageStyle()]}>{message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.lightGrayBackground}
        value={email}
        onChangeText={setEmail}
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
          <Text style={{color: colors.brandBlue, fontSize: 16}}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.whiteText} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
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
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
