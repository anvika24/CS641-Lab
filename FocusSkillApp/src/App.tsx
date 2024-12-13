import React from 'react';

import { NavigationContainer } from '@react-navigation/native';  // Import the navigation container
import AppNavigator from './navigation';  // Import the navigation setup

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />  {/* This will load the AppNavigator with all screens */}
    </NavigationContainer>
  );
};

export default App;
