import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokedex from './pages/pokedex';
import Pokemon from './pages/pokemon'

function PokedexScreen() {
    return (
        <Pokedex />
    );
}

function PokemonScreen() {
    return (
    <Pokemon/>
    );
}



   const Stack = createNativeStackNavigator();

   export default function Routes() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen 
            name="Pokedex Screen" 
            component={PokedexScreen} 
            options={{
                title:' ',
                headerShown: false
            }}
           />
           <Stack.Screen 
            name="Pokemon Screen" 
            component={PokemonScreen} 
            options={{
                title: ' ',
                headerTransparent: true,
                headerTintColor: '#fff',
            }}
           />
         </Stack.Navigator>
       </NavigationContainer>
      );
    }