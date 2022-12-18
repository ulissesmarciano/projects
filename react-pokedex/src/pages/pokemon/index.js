import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import { FiChevronLeft } from 'react-icons/fi'
import { PokemonTablist } from '../../components/PokemonTablist'

import { Container, FirstSection, HeadContainer, TitleContainer, ImageContainer, CurveSection, SecondSection, SkillsContainer, TypesContainer } from './styles'


const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [gender, setGender] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemon(details.data);
    setLoading(false);
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

  return (<>
    {loading? (<Loader/>) :(
      <Container >
      <FirstSection className={pokemon.types?.[0].type.name}>
        <HeadContainer>
          <Link to='/'>
            <FiChevronLeft/>
          </Link>
        </HeadContainer>
        <TitleContainer>
          <h3>{pokemon?.name}</h3>
            {pokemon.id < 10 && <p>#00{pokemon.id}</p>}
            {pokemon.id > 10 && <p>#0{pokemon.id}</p>}
            {pokemon.id > 100 && <p>#{pokemon.id}</p>}
        </TitleContainer>
        <ImageContainer>
          <img src={pokemon.sprites?.other?.dream_world.front_default} alt={`Foto de ${pokemon.name}`}/>
        </ImageContainer>
      </FirstSection>
      <CurveSection>
          <svg className={pokemon.types?.[0].type?.name} width="500"  viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
          </svg>
      </CurveSection>
      <SecondSection>
        <TypesContainer>
          <ul>
            {pokemon.types?.map((type, index) => (<li key={index} className={`${type.type?.name}`}>{type.type?.name}</li>))}
          </ul>
        </TypesContainer>
        <SkillsContainer>
          <PokemonTablist 
            height={`${(pokemon.height/3.048).toFixed(2)} feet (${(pokemon.height/10).toFixed(2)} cm)`}
            weight={`${(pokemon.weight/4.436).toFixed(1)} lbs (${(pokemon.weight)/10} kg)`}
            abilities={pokemon?.abilities?.map((ability, index) => ((<span key={index}>{ability.ability.name}</span>))).reduce((prev, curr) => [prev, ', ', curr])}
            female={`${(gender.gender_rate*100)/8}%`}
            male={`${((gender.gender_rate*-100)/8)+100}%`}
            eggGroup={gender.egg_groups?.[0]?.name}
            eggCycle={gender.egg_groups?.[1]?.name}
            hp={pokemon.stats?.[0]?.base_stat}
            attack={pokemon.stats?.[1]?.base_stat}
            defense={pokemon.stats?.[2]?.base_stat}
            spAtk={pokemon.stats?.[3]?.base_stat}
            spDef={pokemon.stats?.[4]?.base_stat}
            speed={pokemon.stats?.[5]?.base_stat}
            total={pokemon.stats.map((base) => (base.base_stat)).reduce((prev, curr) => prev + curr)}
            move={pokemon?.moves?.map((move, index) => (<li key={index}>{move.move?.name}</li>))}
          />
        </SkillsContainer>
      </SecondSection>
    </Container>
    )}
  </>)
}

export default Pokemon