import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StreakCounterProps {
  streakCount: number; // Number of consecutive days practiced
}

const StreakCounter: React.FC<StreakCounterProps> = ({ streakCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.streakText}>
        {`Streak: ${streakCount} Days`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  streakText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default StreakCounter;
