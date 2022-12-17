import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from '../../components/Loader'
import { Header } from '../../components/Header'
import { PokemonCard } from '../../components/PokemonCard'

import { PokeContainer, Container } from './styles'

const Pokedex = () => {
  useEffect(() => {
    getPokemons();
  }, [])

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemons = () => {
    var limit = 151
    var endpoints = []

    for (var i = 1; i <= limit; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    } 

    axios
    .all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res)).catch((err) => console.log(err))
    setLoading()
  }

  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if(name === ""){
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  return (<>
    {loading ? (<Loader/>) :(
      <Container >
      <Header pokemonFilter={pokemonFilter}/>
      <PokeContainer>
        {pokemons.map((pokemon, index) => (
          <PokemonCard 
          key={index} 
          name={pokemon.data.name} 
          id={pokemon.data.id} 
          avatar={pokemon.data.sprites.other.dream_world.front_default} 
          types={pokemon.data.types.map((type, index) => (<li key={index} className={`${type.type.name}`}>{type.type.name}</li>))} 
          to={`/pokemon/${pokemon.data.id}`} />
        ))}
      </PokeContainer>
    </Container>
    )}
  </>
  )
}

export default Pokedex