import React, { useState } from 'react'

import SearchIcon from '../../assets/icons/searchicon.png'

import { 
  Container, 
  ButtonContainer, 
  ButtonSearch, 
  CenterContainer, 
  SearchFormContainer, 
  DisplayTop, 
} from './styles'

import { SidebarButton } from '../SidebarButton'
import { SearchInput } from '../SearchInput'

const Header = ({pokemonFilter}) => {
  const [showSearch, setShowSearch] = useState(false)


  return (
    <div>
      <Container>
        <ButtonContainer>
          <ButtonSearch onClick={() => setShowSearch(!showSearch)}>
            {showSearch ? false : true}
            <img src={SearchIcon} alt=""/>
          </ButtonSearch>
        </ButtonContainer>
        <CenterContainer>
          <SearchFormContainer>
            {showSearch && <SearchInput pokemonFilter={pokemonFilter}/>}
            <SidebarButton/>
          </SearchFormContainer>
          <DisplayTop />
        </CenterContainer>
      </Container>
    </div>
  )
}

export { Header }