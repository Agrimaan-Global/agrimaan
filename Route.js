/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/login';
import Register from './src/register';
import Root from './src/root';
import Home from './src/home';
import Update from './src/update';

const Route = () => (
    <Router styles={{ alignItem: 'center' }}>
    <Scene key="root">
     <Scene key="main" component={Root} initial />
     <Scene key="register" component={Register} />
     <Scene key="login" component={Login} />
     <Scene key="home" component={Home} />
     <Scene key="update" component={Update} />
    </Scene>

     </Router>
  );


export default Route;
