import React from 'react'

import { SearchInputItem, InputContainer, IconContainer } from './styles'

import { GoSearch } from 'react-icons/go'

const SearchInput = ({leftIcon, name, pokemonFilter, ...rest}) => {
  return (
  <InputContainer>
    <IconContainer><GoSearch/></IconContainer>
    <SearchInputItem onChange={(e) => pokemonFilter(e.target.value)} type="text" placeholder="Busca por Nome ou Numero" leftIcon={<GoSearch/>} />
  </InputContainer>)
}

export { SearchInput }
