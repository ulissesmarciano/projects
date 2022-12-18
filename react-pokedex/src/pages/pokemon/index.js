import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import { FiChevronLeft } from 'react-icons/fi'
import { PokemonTablist } from '../../components/PokemonTablist'

import { Container, FirstSection, HeadContainer, TitleContainer, ImageContainer, CurveSection, SecondSection, SkillsContainer, TypesContainer } from './styles'


const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemon(details.data);
    setLoading(false);
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }
  
  useEffect(() => {
    getPokemon(id)
  }, [])

  return (<>
    {loading? (<Loader/>) :(
      <Container >
      <FirstSection className={pokemon.types[0].type.name}>
        <HeadContainer>
          <Link to='/'>
            <FiChevronLeft/>
          </Link>
        </HeadContainer>
        <TitleContainer>
          <h3>{pokemon.name}</h3>
            {pokemon.id < 10 && <p>#00{pokemon.id}</p>}
            {pokemon.id > 10 && <p>#0{pokemon.id}</p>}
            {pokemon.id > 100 && <p>#{pokemon.id}</p>}
        </TitleContainer>
        <ImageContainer>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={`Foto de ${pokemon.name}`}/>
        </ImageContainer>
      </FirstSection>
      <CurveSection>
          <svg className={pokemon.types?.[0].type.name} width="500"  viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
          </svg>
      </CurveSection>
      <SecondSection>
        <TypesContainer>
          <ul>
            {pokemon.types.map((type, index) => (<li key={index} className={`${type.type.name}`}>{type.type.name}</li>))}
          </ul>
        </TypesContainer>
        <SkillsContainer>
          <PokemonTablist 
          
          />
        </SkillsContainer>
      </SecondSection>
    </Container>
    )}
  </>)
}

export default Pokemon