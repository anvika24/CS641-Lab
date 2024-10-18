import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlatListExample from './components/FlatListExample';
import ModalExample from './components/ModalExample';
import RefreshControlExample from './components/RefreshControlExample';

const App = () => {
  return (
    //<SafeAreaView style={styles.container}>
     // <RefreshControlExample />
   // </SafeAreaView>
   <ModalExample />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
