/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  YellowBox
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import Login from './src/login';
import Register from './src/register';
import Root from './src/root';
import Home from './src/home';
import Update from './src/update';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
class App extends Component {

  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'root') {
      return <Root navigator={navigator} />
    }
    if(route.name == 'register') {
      return <Register navigator={navigator} />
    }
    if(route.name == 'login') {
      return <Login navigator={navigator} />
    }
    if(route.name == 'home') {
      return <Home navigator={navigator} {...route.passProps} />
    }
    if(route.name == 'update') {
      return <Update navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationExperimental.Navigator
          initialRoute={{ name: 'root' }}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c313a',
  },
});

export default App;
