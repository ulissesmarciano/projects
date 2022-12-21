import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Header from '../../components/Header'


export default function Pokedex () {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor='#C01733' />
      <Header />
    </SafeAreaView>
  )
}

