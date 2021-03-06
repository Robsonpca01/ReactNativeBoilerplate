import React from 'react';
import lifecycle from 'react-pure-lifecycle';
// import { NavigationActions } from 'react-navigation';
import { 
  StyleSheet, 
  View, 
  BackHandler, 
  Button,
  FlatList,
  Text,
  TouchableHighlight
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoginStatusMessage from '../components/LoginStatusMessage';
import AuthButton from '../components/AuthButton';


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
  console.log('back button clicked 43');

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
    <Button onPress={() => globalprop.navigation.dispatch(NavigationActions.navigate({ routeName: 'Api' }))}
      title="Tela de Testes 5" />
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        numColumns='2'
        renderItem={({item, separators}) => (
          <TouchableHighlight
          onPress={(evento) => console.log('--------------')}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
          style={{padding:11}}
          >

          <View style={{backgroundColor: 'yellow', padding: 12}}>
            <Text>{item.key}</Text>
          </View>
          </TouchableHighlight>
        )}
      />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default lifecycle(lifecycleMethods)(MainScreen);
