import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokedex from './pages/pokedex';
import Pokemon from './pages/pokemon';

   const Stack = createNativeStackNavigator();

   function Routes() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen 
            name="Pokedex Screen" 
            component={Pokedex} 
            options={{
                title:' ',
                headerShown: false
            }}
           />
           <Stack.Screen 
            name="Pokemon Screen" 
            component={Pokemon} 
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

export default Routes