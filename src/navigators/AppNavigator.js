import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ApiTesteScreen from '../screens/ApiTesteScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const RootNavigator = createStackNavigator({
  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },  
  Profile: { screen: ProfileScreen },
  Api : { screen: ApiTesteScreen }
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});


const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
