import React from 'react'

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
  return (
    <div>
      <Container>
        <ButtonContainer>
          <ButtonSearch />
        </ButtonContainer>
        <CenterContainer>
          <SearchFormContainer>
            <SearchInput pokemonFilter={pokemonFilter}/>
            <SidebarButton/>
          </SearchFormContainer>
          <DisplayTop />
        </CenterContainer>
      </Container>
    </div>
  )
}

export { Header }