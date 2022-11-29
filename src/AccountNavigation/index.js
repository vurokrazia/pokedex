import React from 'react';
import AccountScreen from '../screens/account';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="My account"
        component={AccountScreen}
        options={{title: 'Mi cuenta'}}
      />
    </Stack.Navigator>
  );
};
