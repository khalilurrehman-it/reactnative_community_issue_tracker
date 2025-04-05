import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {auth} from '../../firebaseConfig';

export const login = (email, password) => async dispatch => {
  dispatch({type: 'LOGIN_REQUEST'});

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    ); // Use `auth` here
    dispatch({type: 'LOGIN_SUCCESS', payload: userCredential.user});
    return Promise.resolve(); // Resolve successfully if login succeeds
  } catch (error) {
    dispatch({type: 'LOGIN_FAILURE', payload: error.message});
    return Promise.reject(error); // Reject if error occurs
  }
};

// Action for signup
export const signup = (email, password) => {
  return async dispatch => {
    dispatch({type: 'SIGNUP_REQUEST'});

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      dispatch({type: 'SIGNUP_SUCCESS', payload: userCredential.user});
    } catch (error) {
      //   dispatch({type: 'SIGNUP_FAILURE', payload: error.message});
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered.');
      } else {
        throw error;
      }
    }
  };
};

// Action for logout
export const logout = () => {
  return async dispatch => {
    try {
      await auth.signOut();
      dispatch({type: 'LOGOUT'});
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
};

// Action for checking user login status
export const checkUserLoginStatus = () => {
  return dispatch => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // User is logged in
        dispatch({type: 'LOGIN_SUCCESS', payload: user});
      } else {
        // User is logged out
        dispatch({type: 'LOGOUT'});
      }
    });

    return unsubscribe; // Clean up the listener when the component unmounts
  };
};
