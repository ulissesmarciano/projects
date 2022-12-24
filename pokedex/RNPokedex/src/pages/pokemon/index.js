import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import { POKEMON_TYPE_COLORS } from '../../util/constants'
import TabList from '../../components/TabList'

import { Container, FirstSection, PokeNameContainer, PokeName, PokeId, PokemonImageContainer, PokemonImage, TypesContainer, Type, SecondSection } from './styles'

const PokemonUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

const Pokemon = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor='transparent' />
      <LinearGradient colors={[`green`,  'transparent']}>
        <FirstSection>
          <PokeNameContainer>
            <PokeName>Bulbasaur</PokeName>
            <PokeId>#01</PokeId>
          </PokeNameContainer>
          <PokemonImageContainer>
            <PokemonImage source={{uri: PokemonUrl}} />
          </PokemonImageContainer>
          <TypesContainer>
            <Type style={{backgroundColor: POKEMON_TYPE_COLORS['normal']}}>Grass</Type>
            <Type style={{backgroundColor: POKEMON_TYPE_COLORS['grass']}}>Grass</Type>
          </TypesContainer>
        </FirstSection>
      </LinearGradient>
        <SecondSection>
          <TabList />
        </SecondSection>
    </Container>
  )
}

export default Pokemon