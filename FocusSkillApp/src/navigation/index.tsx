import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomePage from '../pages/WelcomePage';
import SkillSelectionPage from '../pages/SkillSelectionPage';
import HomePage from '../pages/HomePage';
import 'react-native-gesture-handler'; // Ensure this is included in the entry file

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomePage} />
      <Tab.Screen name="SkillSelection" component={SkillSelectionPage} />
      <Tab.Screen name="Home" component={HomePage} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
