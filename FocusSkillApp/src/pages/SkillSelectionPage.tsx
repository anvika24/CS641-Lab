import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkillInputForm from '../components/SkillInputForm';  // Import SkillInputForm
import { saveUserData } from '../firebase/config';  // Import Firebase function

const SkillSelectionPage = ({ navigation }: any) => {
  const handleSkillSelect = (skill: string, difficulty: string) => {
    // Example of dynamically getting the userId (e.g., from Firebase Authentication)
    const userId = 'user123';  // Replace with dynamically retrieved userId
    const data = { skill, difficulty };

    // Save skill and difficulty to Firebase
    saveUserData(userId, data);

    // Navigate to the Home page after saving data
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SkillInputForm onSkillSelect={handleSkillSelect} />  {/* Use SkillInputForm here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default SkillSelectionPage;
