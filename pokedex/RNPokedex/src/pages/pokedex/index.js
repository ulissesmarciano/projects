import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native'
import axios from 'axios'

import { CardEmpty, Pokelist, Type } from './styles'
import { POKEMON_TYPE_COLORS } from '../../util/constants'

import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'

const Pokedex = ({navigation}) => {
    useEffect(() => {
      getPokemons();
    }, [])
  
    const [pokemons, setPokemons] = useState([])
    
    const getPokemons = () => {
      var limit = 15
      var endpoints = []
  
      for (var i = 1; i <= limit; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      } 
  
      axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err))
    }

    
    const pokemonFilter = (name) => {
      var filteredPokemons = [];
      if (name === ""){
        getPokemons()
      }
      for (var i in pokemons) {
        if(pokemons[i].data.name.includes(name.toLowerCase())) {
          filteredPokemons.push(pokemons[i])
        }
      }
      setPokemons(filteredPokemons)
    }

    //console.log(pokemons)
 
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor='#C01733' />
      <Header
        onChangeText={pokemonFilter}
      />
      <Pokelist>
        <FlatList
            data={pokemons}
            numColumns={2}
            renderItem={(pokemon) => 
              <PokemonCard 
                name={pokemon.item.data.name}
                avatar={pokemon.item.data.sprites.other['official-artwork'].front_default}
                id={pokemon.item.data.id}
                type={pokemon.item.data.types.map((type) => (<Type style={{backgroundColor: POKEMON_TYPE_COLORS[`${type.type.name}`]}} >{type.type.name}</Type>))} 
                onClick={() => {navigation.navigate('Pokemon Screen', pokemon.item.data.id)}} 
                key={pokemon.item.data.id}
              />
            }
          />
      </Pokelist>
    </SafeAreaView>
  )
}



export default Pokedex