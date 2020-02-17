import * as React from 'react';
import { Text, View } from 'react-native';

import { Location } from 'expo-location';

export default function LocationScreen() {
  const [location2, setLocation] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      console.log('status', status)
      setHasPermission(status === 'granted');
    })();
  }, []);

  let location3 = await Location.getCurrentPositionAsync({});
  console.log('location', location3);

  React.useEffect(() => {
    const getData = async () => {
      let location1 = await Location.getCurrentPositionAsync({});
      console.log('location', location1);
      setLocation(location1);
    };
    getData();
  }, []);

  // if (hasPermission === null) {
  //   return <View><Text>No Permission</Text></View>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to Location</Text>;
  // }

  return (
    <View style={{ flex: 1 }}>
      {errorMessage ? (
        <Text>Error:{JSON.stringify(errorMessage)}</Text>
      ) : (
        <Text>Location:{JSON.stringify(location2)}</Text>
      )}
    </View>
  );
}
