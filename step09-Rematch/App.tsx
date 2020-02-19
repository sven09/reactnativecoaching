import React, { FC } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import createPersistPlugin, { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/es/integration/react'

import { useRematchDispatch, Dispatch, IRootState, store } from './src/rematch/store';

export const Inner: React.FC = () => {

  const loginAsync = useRematchDispatch((dispatch: Dispatch) => dispatch.auth.loginAsync);
  const logoutAsync = useRematchDispatch((dispatch: Dispatch) => dispatch.auth.logoutAsync);
  const loadPeopleAsync = useRematchDispatch((dispatch: Dispatch) => dispatch.auth.loadPeopleAsync);

  const isLoggedIn = useSelector((store: IRootState) => store.auth.isLoggedIn);
  const userName = useSelector((store: IRootState) => store.auth.userName);
  const people = useSelector((store: IRootState) => store.auth.people);

  return (
    <View style={styles.container}>
      <Text>LoggedIn:{isLoggedIn ? 'Yes' : 'No'}</Text>
      <Text>UserName:{userName}</Text>
      <Button title={'login'} onPress={() => {
        loginAsync('Hallo');
        loadPeopleAsync('dummy');
      }} />

      <Button title={'logout'} onPress={() => logoutAsync()} />

      {people && people.length > 0 ?
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <Text>
              {item.name}
            </Text>
          )}
          keyExtractor={item => item.name}

        />
        : <Text>No data</Text>}
    </View>);

};
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <Inner />
      </PersistGate>
    </Provider>
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
