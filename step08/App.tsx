import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export const LoginContext = React.createContext({
  isLoggedIn: false,
  login: () => { },
  logout: () => { },
});

export const OtherComponent: React.FC = () => {
  const loginCtx = React.useContext(LoginContext);

  return (

    <Text style={{ color: loginCtx.isLoggedIn ? 'green' : 'red' }}>
      {loginCtx.isLoggedIn ? 'logged In' : 'not logged in'}
    </Text>
  );
};


export const LoginStateButton: React.FC = () => {
  const loginCtx = React.useContext(LoginContext);

  return (
    <>
      <Text>
        {loginCtx.isLoggedIn ? 'logged In' : 'not logged in'}
      </Text>
      {loginCtx.isLoggedIn ?
        <Button title="Logout" onPress={() => loginCtx.logout()} /> :
        <Button title="Login" onPress={() => loginCtx.login()} />}
    </>
  );
};

export default function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const loggedInInit = {
    isLoggedIn: loggedIn,
    login: () => setLoggedIn(true),
    logout: () => setLoggedIn(false),
  };

  return (
    <LoginContext.Provider value={loggedInInit}>
      <View style={styles.container}>
        <LoginStateButton /> 
        <OtherComponent />
      </View>

    </LoginContext.Provider >
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
