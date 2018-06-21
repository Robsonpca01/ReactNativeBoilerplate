import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

class ReduxExampleApp extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    console.log('back button clicked');
    console.log(this.props);
    const { dispatch, nav } = this.props;
    /* if (nav.index === 0) {
      return false;
    } */

    // this.props.navigation.dispatch(NavigationActions.back());
    return true;
  };


  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;
