import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, ActivityIndicator, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CounterOne = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    return (
        <View style={styles.counterContainer}>
            <Text>Counter One: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const CounterTwo = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);

    return (
        <View style={styles.counterContainer}>
            <Text>Counter Two: {value}</Text>
            <Button title="Increment by 2" onPress={() => setValue(value + 2)} />
        </View>
    );
};

export default function App() {
    return (
        <ScrollView>
            <Text>Hello there</Text>
            <Text>How is it going?</Text>
            <ActivityIndicator />
            <Image 
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/288px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" }}
                style={styles.tinyLogo} 
            />
            <CounterOne initialCount={0} />
            <CounterTwo initialValue={5} />
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
        height: 500,
    },
    counterContainer: {
        marginVertical: 20,
        alignItems: 'stretch',
    },
});
