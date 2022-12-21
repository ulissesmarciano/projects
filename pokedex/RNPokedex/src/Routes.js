import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokedex from './pages/pokedex';

function PokedexScreen() {
    return (
        <Pokedex />
    );
}

function PokemonScreen() {
    return (
    <View style={{flex: 1, alignItems: 'center', 
        justifyContent: 'center'}}>
        <Text> Pokemon Screen </Text>
    </View>
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
            }}
           />
         </Stack.Navigator>
       </NavigationContainer>
      );
    }