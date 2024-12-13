import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkillInputForm from '../components/SkillInputForm';  
import { saveUserData } from '../firebase/config';  

const SkillSelectionPage = ({ navigation }: any) => {
  const handleSkillSelect = (skill: string, difficulty: string) => {
    
    const userId = 'user123';  
    const data = { skill, difficulty };

    
    saveUserData(userId, data);

  
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
