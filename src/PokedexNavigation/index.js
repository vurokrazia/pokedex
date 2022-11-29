import React from 'react';
import PokedexScreen from '../screens/pokedex';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokemon from '../Pokemon';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{title: 'Pokedex'}}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{        title: "",
        headerShown: true,
        headerTransparent: true,
        headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};
