import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { useIdTokenAuthRequest } from 'expo-auth-session';  // Correct import
import { signInWithGoogle } from '../firebase/config';  // Firebase function to handle Google sign-in

const LoginScreen = ({ navigation }: any) => {
  // Initialize Google Auth Request with Web Client ID from Firebase
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: '598239659626-787psv852npdu1he3a0gt4h465u29jas.apps.googleusercontent.com',  // Replace with your Web Client ID from Firebase Console
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      // Use the Google ID token to sign in with Firebase
      signInWithGoogle(id_token)
        .then(() => {
          navigation.navigate('Home');  // Navigate to the Home screen on success
        })
        .catch((e: any) => {
          console.error('Authentication failed:', e);  // Log full error for debugging
          setError('Authentication failed: ' + (e?.message || 'Unknown error'));  // Handle errors
        });
    }
  }, [response]);

  return (
    <View>
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}  {/* Display error if any */}
      <Button
        title="Sign in with Google"
        onPress={() => promptAsync()}  // Trigger Google Sign-In
        disabled={!request}  // Disable button if the request isn't ready
      />
    </View>
  );
};

export default LoginScreen;
