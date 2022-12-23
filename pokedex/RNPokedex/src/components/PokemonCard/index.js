import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { POKEMON_TYPE_COLORS } from '../../util/constants'
import { Container, PokemonName, PokemonImage, InfoView, TypesContainer, Type, PokeId } from './styles'

const PokemonUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

export default function PokemonCard({name, avatar, id, type, onPress, className}) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('Pokemon Screen')}>
        <PokemonName>Bulbasaur</PokemonName>
        <PokemonImage
        source={{ uri: PokemonUrl}}
        />
        <InfoView>
          <TypesContainer>
            <Type style={{backgroundColor: POKEMON_TYPE_COLORS['normal']}} >Grass</Type>
          </TypesContainer>
            <PokeId>#01</PokeId>
        </InfoView>
    </Container>
  )
}