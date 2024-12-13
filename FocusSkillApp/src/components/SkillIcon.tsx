import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface SkillIconProps {
  skillImage: string; 
}

const SkillIcon: React.FC<SkillIconProps> = ({ skillImage }) => {
  return <Image source={{ uri: skillImage }} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default SkillIcon;
