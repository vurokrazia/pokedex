import React from 'react';
import FavoriteScreen from '../screens/favorite';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{title: 'Favoritos'}}
      />
    </Stack.Navigator>
  );
};
