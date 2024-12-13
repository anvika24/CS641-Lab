import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StreakCounter from '../components/StreakCounter';  // Import StreakCounter
import ProgressBar from '../components/ProgressBar';  // Import ProgressBar
import { getDatabase, ref, get } from 'firebase/database';  // Import Firebase functions

const HomePage = () => {
  const [userData, setUserData] = useState<any>(null);  // State to store fetched data

  useEffect(() => {
    // Dynamically get the userId (replace with actual dynamic userId, e.g., from Firebase Auth)
    const userId = 'user123';  

    const db = getDatabase();  // Get Firebase Realtime Database instance
    const userRef = ref(db, 'users/' + userId);  // Reference the specific user’s data
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());  // Set the user data in state
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);  // Run the effect once when the component mounts

  if (!userData) return <Text>Loading...</Text>;  // Show loading message while fetching data

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
