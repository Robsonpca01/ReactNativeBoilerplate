import React from 'react';
import lifecycle from 'react-pure-lifecycle';
// import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, BackHandler } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

let globalprop;

const onBackPress = () => {
  console.log('back button clicked');

  // globalprop.navigation.dispatch({ type: 'Login' });
  // globalprop.navigation.dispatch(NavigationActions.back());
  globalprop.navigation.pop();
  return true;
};

const lifecycleMethods = {
  componentDidMount(props) {
    globalprop = props;
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
  },

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  },
};


const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default lifecycle(lifecycleMethods)(MainScreen);
