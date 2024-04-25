import { initializeApp } from 'firebase/app';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyCT2HcLSfTe0L2Yc_VGhrlq3Kf2cOs0Q5E",
  authDomain: "web-firebase-auth-55a65.firebaseapp.com",
  projectId: "web-firebase-auth-55a65",
  storageBucket: "web-firebase-auth-55a65.appspot.com",
  messagingSenderId: "92312211884",
  appId: "1:92312211884:web:265545dd2907a9e6ddea09",
  measurementId: "G-WFEJZVKB2B"
});
const auth = getAuth(app);

export {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword};
