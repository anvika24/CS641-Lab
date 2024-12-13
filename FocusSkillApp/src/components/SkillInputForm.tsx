import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';  


interface SkillInputFormProps {
  onSkillSelect: (skill: string, difficulty: string) => void;
}

const SkillInputForm: React.FC<SkillInputFormProps> = ({ onSkillSelect }) => {
  const [skill, setSkill] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter skill (e.g., Guitar)"
        value={skill}
        onChangeText={setSkill}
      />
      <Picker
        selectedValue={difficulty}
        style={styles.picker}
        onValueChange={(itemValue) => setDifficulty(itemValue)}
      >
        <Picker.Item label="Beginner" value="Beginner" />
        <Picker.Item label="Intermediate" value="Intermediate" />
        <Picker.Item label="Advanced" value="Advanced" />
      </Picker>
      <Text style={styles.button} onPress={() => onSkillSelect(skill, difficulty)}>
        Start Tracking
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default SkillInputForm;
