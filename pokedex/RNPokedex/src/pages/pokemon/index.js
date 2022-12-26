import React, { useState, useEffect } from 'react'
import { Text, FlatList } from 'react-native'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import { POKEMON_TYPE_COLORS } from '../../util/constants'
import TabList from '../../components/TabList'

import { Container, FirstSection, PokeNameContainer, PokeName, PokeId, PokemonImageContainer, PokemonImage, TypesContainer, Type, SecondSection } from './styles'

const PokemonUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

const Pokemon = ({route}) => {
  const  id  = route.params
  const [pokemon, setPokemon] = useState([])
  const [gender, setGender] = useState([])

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemon(details.data);
  }

  const getGender = async (id) => {
    const detail = await getPokemonGender(id)
    setGender(detail.data)
    console.log(detail.data)
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res
  }

  const getPokemonGender = async (id) =>{
    const gen = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return gen;
  }

  useEffect(() => {
    getPokemon(id)
    getGender(id)
  }, [])
  console.log(pokemon)
  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <LinearGradient colors={[POKEMON_TYPE_COLORS[`${pokemon.types?.[0].type.name}`],  'transparent']}>
        <FirstSection>
          <PokeNameContainer>
            <PokeName>{pokemon.name}</PokeName>
            <PokeId>#{id > 10 ? pokemon.id : `0${pokemon.id}`}</PokeId>
          </PokeNameContainer>
          <PokemonImageContainer>
            <PokemonImage source={{uri: pokemon.sprites?.other['official-artwork'].front_default}} />
          </PokemonImageContainer>
          <TypesContainer>
            
          </TypesContainer>
        </FirstSection>
      </LinearGradient>
        <SecondSection>
          <TabList 
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon?.abilities?.map((ability, index) => ((<Text key={index}>{ability.ability.name}</Text>))).reduce((prev, curr) => [prev, ', ', curr])}
            female={`${(gender.gender_rate*100)/8}%`}
            male={`${((gender.gender_rate*-100)/8)+100}%`}
            eggGroup={gender.egg_groups?.[0].name}
            eggCycle={gender.egg_groups?.[1].name}
            hp={pokemon.stats?.[0]?.base_stat}
            attack={pokemon.stats?.[1]?.base_stat}
            defense={pokemon.stats?.[2]?.base_stat}
            spAtk={pokemon.stats?.[3]?.base_stat}
            spDef={pokemon.stats?.[4]?.base_stat}
            speed={pokemon.stats?.[5]?.base_stat}
            total={pokemon.stats?.map((base) => (base.base_stat)).reduce((prev, curr) => prev + curr)}
            move={pokemon?.moves?.map((move) => (<Text>{move.move?.name}</Text>))}
          />
        </SecondSection>
    </Container>
  )
}

export default Pokemon