import React from 'react'
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native'

import { CardEmpty } from './styles'

import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'

export default function Pokedex () {
  
    const data= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  
  const columns = 2 
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor='#C01733' />
      <Header />
      <FlatList 
        data={createRows(data, columns)}
        numColumns={columns}
        renderItem={({ item }) => {
          if (item.empty) {
            return <CardEmpty />;
          }
          return (
            <PokemonCard />
          );
        }}
      />
    </SafeAreaView>
  )
}

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements += 1;
  }

  return data;
}