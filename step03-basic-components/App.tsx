import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';

import { TileC } from './TileC';
import { TileFC } from './TileFC';

export default function App() {

  const _showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };



  const innerView = () => {

    return (<>
      <Text>Step 03</Text>
      <Button title="Hello" onPress={() => alert('Hello pressed')} />
      <Button title="Hello expo Web" onPress={() => _showAlert()
      } />

      <TouchableOpacity onPress={() => alert('TouchableOpacity')}>
        <View style={{
          backgroundColor: 'cyan',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
        }}>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TileC text="Component Tile 1" backgroundColor="red" />
      <TileC text="Component Tile 2" backgroundColor="cyan" />


      <TileFC text="FC Tile1" backgroundColor="lightgreen" />
      <TileFC text="FC Tile2" backgroundColor="lightblue" />
    </>);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.containerSV}>
        {innerView()}
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {innerView()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSV: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
