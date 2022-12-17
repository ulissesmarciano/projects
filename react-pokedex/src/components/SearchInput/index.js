import React from 'react'

import { SearchInputItem, InputContainer, IconContainer } from './styles'

import { GoSearch } from 'react-icons/go'

const SearchInput = ({leftIcon, name, ...rest}) => {
  return (
  <InputContainer>
    <IconContainer><GoSearch/></IconContainer>
    <SearchInputItem type="text" placeholder="Busca por Nome ou Numero" leftIcon={<GoSearch/>} />
  </InputContainer>)
}

export { SearchInput }
