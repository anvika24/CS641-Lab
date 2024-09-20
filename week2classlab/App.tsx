import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Hello there</Text>
      <Text>How is it going?</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/288px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"}}
      style={styles.tinyLogo} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height:500
  }
});
