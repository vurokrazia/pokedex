/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};

export default App;
