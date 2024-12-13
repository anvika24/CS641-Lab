import React from 'react';

import { NavigationContainer } from '@react-navigation/native';  
import AppNavigator from './navigation'; 

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />  {/* This will load the AppNavigator with all screens */}
    </NavigationContainer>
  );
};

export default App;
