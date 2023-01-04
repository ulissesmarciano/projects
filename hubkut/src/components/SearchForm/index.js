import React from 'react'
import SearchIcon from '../../assets/icons/search-icon.png'

import { Container } from './styles'


const SearchForm = () => {
  return (
    <Container>
      <img src={SearchIcon} alt='icone de busca' />
      <input type="text" placeholder='Digite o usuário' />
    </Container>
  )
}

export default SearchForm