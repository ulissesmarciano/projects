import React from 'react'



import { Container, PokemonName, PokemonImage, InfoView, TypesContainer, PokeId } from './styles'

const PokemonUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

export default function PokemonCard({name, avatar, id, type, onClick, key }) {
  return (
    <Container key={key} onPress={onClick}>
        <PokemonName>{name}</PokemonName>
        <PokemonImage
        source={{ uri: `${avatar}`}}
        />
        <InfoView>
          <TypesContainer>
            {type}
          </TypesContainer>
            <PokeId>{id > 10 ? `#${id}` : `#0${id}`}</PokeId>
        </InfoView>
    </Container>
  )
}