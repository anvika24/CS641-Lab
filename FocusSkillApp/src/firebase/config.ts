import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';  
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';  

const firebaseConfig = {
  apiKey: "AIzaSyBrzhoJi3ft75j9HhcKTj3f_AZ-d-qfeNM",
  authDomain: "focusskillapp-3e04a.firebaseapp.com",
  projectId: "focusskillapp-3e04a",
  storageBucket: "focusskillapp-3e04a.firebasestorage.app",
  messagingSenderId: "598239659626",
  appId: "1:598239659626:web:05c24415752ce008f36c13",
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);  
const auth = getAuth(app);  

const saveUserData = (userId: string, data: any) => {
  set(ref(database, 'users/' + userId), data)
    .then(() => console.log('User data saved successfully!'))
    .catch((error) => console.error('Error saving user data:', error));
};

const signInWithGoogle = async (idToken: string) => {
  const googleCredential = GoogleAuthProvider.credential(idToken);  
  return await signInWithCredential(getAuth(), googleCredential);  
};

export { saveUserData, signInWithGoogle, auth };
