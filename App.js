import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
 const [outputText, setOutPutText] = useState('My name is Khan!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change text"  onPress={() => setOutPutText("and i am not a terrorist!")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
