import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch, KeyboardAvoidingView, SafeAreaView, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [value, onChangeText] = React.useState('');
  const [switchValue, toggleSwitch] = React.useState(false);
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  

  const renderBasicComponents = () => {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1, width: '100%', backgroundColor: 'yellow' }}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          placeholder={'Please enter something'}
          value={value}
        />

        <Switch
          style={{ marginTop: 30 }}
          onValueChange={toggleSwitch}
          value={switchValue} />

        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

      </KeyboardAvoidingView >
    );
  };

  // https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker
  //  expo install @react-native-community/datetimepicker
  return (
    <SafeAreaView style={styles.container}>
      {renderBasicComponents()}
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
});
