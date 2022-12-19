import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer, ImageContainer, InfoContainer, TypesContainer, IdContainer } from './styles'

const  PokemonCard = ({name, avatar, id, types, to }) => {
  return (
    <Link to={to} style={{textDecoration: "none"}}>
    <Container >
        <TitleContainer >
            <h3>{name}</h3>
        </TitleContainer>
        <ImageContainer>
            <img src={avatar} alt="Foto do Pokemon"/>
        </ImageContainer>
        <InfoContainer >
            <TypesContainer>
                <ul >
                    {types}
                </ul>
            </TypesContainer>
            <IdContainer>
                <p>#{id < 10 ? `0${id}`: `${id}`}</p>
            </IdContainer>
        </InfoContainer>
    </Container>
    </Link>
  )
}

export { PokemonCard }
