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

const Header = () => {
  return (
    <div>
      <Container>
        <ButtonContainer>
          <ButtonSearch />
        </ButtonContainer>
        <CenterContainer>
          <SearchFormContainer>
            <SearchInput />
            <SidebarButton/>
          </SearchFormContainer>
          <DisplayTop />
        </CenterContainer>
      </Container>
    </div>
  )
}

export { Header }