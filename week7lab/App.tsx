import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Home({navigation}) {
  return (
      <View style={styles.container}>
        <Text>This is home screen</Text>
          <Button title={"Settings"} onPress={() => navigation.navigate('Settings')}/>
          <Button title={"Intro"} onPress={() => navigation.navigate('Intro')}/>  
      </View>
  );
}

function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is settings screen</Text>
            <Button title={"Settings Again"} onPress={() => navigation.navigate('Intro')}/>
        </View>
    );
}

function Intro({navigation}) {
  return (
      <View style={styles.container}>
          <Text>Hi there! How is it going?</Text>
          <Button title={"Go back"} onPress={() => navigation.navigate('Home')}/>
      </View>
  );
}

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Intro" component={Intro}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});