import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  updateProfile 
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAlAflmroucUqHbRBgIa66MlU5VByRpP0Y",
  authDomain: "auth-3532d.firebaseapp.com",
  projectId: "auth-3532d",
  storageBucket: "auth-3532d.firebasestorage.app",
  messagingSenderId: "132762542253",
  appId: "1:132762542253:web:c9a4b7b39365fc22c22624",
  measurementId: "G-7G4H0V51TD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile
};

export { analytics };
export default app; 