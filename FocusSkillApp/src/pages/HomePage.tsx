import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StreakCounter from '../components/StreakCounter';  
import ProgressBar from '../components/ProgressBar';  
import { getDatabase, ref, get } from 'firebase/database';  

const HomePage = () => {
  const [userData, setUserData] = useState<any>(null);  

  useEffect(() => {
    
    const userId = 'user123';  

    const db = getDatabase();  
    const userRef = ref(db, 'users/' + userId);  
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());  
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);  

  if (!userData) return <Text>Loading...</Text>;  

  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>Skill: {userData.skill}</Text>
      <StreakCounter streakCount={userData.streak || 0} />
      <ProgressBar progress={userData.progress || 0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomePage;
