import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { useIdTokenAuthRequest } from 'expo-auth-session';  
import { signInWithGoogle } from '../firebase/config';  

const LoginScreen = ({ navigation }: any) => {
  
  const [request, response, promptAsync] = useIdTokenAuthRequest({
    clientId: '598239659626-787psv852npdu1he3a0gt4h465u29jas.apps.googleusercontent.com',  
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

    
      signInWithGoogle(id_token)
        .then(() => {
          navigation.navigate('Home');  
        })
        .catch((e: any) => {
          console.error('Authentication failed:', e);  
          setError('Authentication failed: ' + (e?.message || 'Unknown error'));  
        });
    }
  }, [response]);

  return (
    <View>
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}  {/* Display error if any */}
      <Button
        title="Sign in with Google"
        onPress={() => promptAsync()}  
        disabled={!request} 
      />
    </View>
  );
};

export default LoginScreen;
