import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_gfUXJg2ahPvAWMA8nTDDXGME2784oUA',
  authDomain: 'justicepath-216ce.firebaseapp.com',
  projectId: 'justicepath-216ce',
  storageBucket: 'justicepath-216ce.firebasestorage.app',
  messagingSenderId: '972410105999',
  appId: '1:972410105999:web:09f225146188b5ed7f40fa',
  measurementId: 'G-9RPDLCMZY2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
