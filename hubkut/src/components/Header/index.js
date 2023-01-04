import React, { useState } from 'react'
import HubkutIcon from '../../assets/icons/hubkut-icon.png'
import LinkItem from '../LinkItem'
import Sidebar from '../Sidebar'
import SideBarButton from '../SidebarButton'
import SearchForm from '../SearchForm'

import {Wrapper, Container, IconContainer, SidebarButtonContainer, MenuWrapper, LinksContainer, SearchContainer } from './styles'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <Wrapper>
      <Container>
          <IconContainer>
              <img src={HubkutIcon} alt="ícone da página"/>
          </IconContainer>
          <SidebarButtonContainer>
            <SideBarButton onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar}/>}
          </SidebarButtonContainer>
          <MenuWrapper>
            <LinksContainer>
              <LinkItem title="Início" href="#" />
              <LinkItem title="Pull Requests" href="#" variant="primary" />
              <LinkItem title="Issues" href="#" variant="primary" />
              <LinkItem title="Marketplace" href="#" variant="primary" />
              <LinkItem title="Explore" href="#" variant="primary" />
            </LinksContainer>
            <SearchContainer>
              <LinkItem title="Sair" href="#" variant="primary" />
              <SearchForm />
            </SearchContainer>
          </MenuWrapper>
      </Container>
    </Wrapper>
  )
}

export default Header