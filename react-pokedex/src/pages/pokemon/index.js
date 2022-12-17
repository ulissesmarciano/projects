import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import { FiChevronLeft } from 'react-icons/fi'

import { Container } from 'react-bootstrap'


const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemon(details.data);
    setLoading(false);
    console.log(details.data)
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
      <Container>
        <FirstSection>
          <HeadContainer>

          </HeadContainer>
        </FirstSection>
      </Container>
    )}
  </>)
}

export default Pokemon