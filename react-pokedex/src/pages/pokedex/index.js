import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from '../../components/Loader'
import { Header } from '../../components/Header'

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
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))
    .catch((err) => console.log(err))
    setLoading()
  }

  return (<>
    {loading ? (<Loader/>) :(
      <Header/>
    )}
  </>
  )
}

export default Pokedex