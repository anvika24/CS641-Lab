// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';  // For Realtime Database
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';  // For Authentication

// Firebase configuration object (replace with actual values from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBrzhoJi3ft75j9HhcKTj3f_AZ-d-qfeNM",
  authDomain: "focusskillapp-3e04a.firebaseapp.com",
  projectId: "focusskillapp-3e04a",
  storageBucket: "focusskillapp-3e04a.firebasestorage.app",
  messagingSenderId: "598239659626",
  appId: "1:598239659626:web:05c24415752ce008f36c13",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const database = getDatabase(app);  // Realtime Database instance
const auth = getAuth(app);  // Firebase Authentication instance

// Function to save user data to Firebase Realtime Database
const saveUserData = (userId: string, data: any) => {
  set(ref(database, 'users/' + userId), data)
    .then(() => console.log('User data saved successfully!'))
    .catch((error) => console.error('Error saving user data:', error));
};

// Function to sign in with Google using Firebase Authentication
const signInWithGoogle = async (idToken: string) => {
  const googleCredential = GoogleAuthProvider.credential(idToken);  // Create Google Credential
  return await signInWithCredential(getAuth(), googleCredential);  // Sign in with the Google credential
};

// Export the necessary functions and instances
export { saveUserData, signInWithGoogle, auth };
