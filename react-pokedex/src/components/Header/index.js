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
import { Sidebar } from '../Sidebar'

const Header = ({pokemonFilter}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  
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
            <SidebarButton onClick={showSidebar}/>
            {sidebar && <Sidebar active={setSidebar}/>}
          </SearchFormContainer>
          <DisplayTop />
        </CenterContainer>
      </Container>
    </div>
  )
}

export { Header }