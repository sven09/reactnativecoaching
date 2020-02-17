import React, { FC } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import { useRematchDispatch, Dispatch, IRootState, store } from './src/rematch/store';

export const Inner: React.FC = () => {

  const loginAsync = useRematchDispatch((dispatch: Dispatch) => dispatch.auth.loginAsync);
  const logoutAsync = useRematchDispatch((dispatch: Dispatch) => dispatch.auth.logoutAsync);

  const isLoggedIn = useSelector((store: IRootState) => store.auth.isLoggedIn);
  const userName = useSelector((store: IRootState) => store.auth.userName);

  return (
    <View style={styles.container}>
      <Text>LoggedIn:{isLoggedIn ? 'Yes' : 'No'}</Text>
      <Text>UserName:{userName}</Text>
      <Button title={'login'} onPress={() => loginAsync('Hallo')} />
      <Button title={'logout'} onPress={() => logoutAsync()} />
    </View>);

};
export default function App() {
  return (
      <Provider store={store}>
        <Inner />
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
