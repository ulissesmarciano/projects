import React, { useState } from 'react'
import HubkutIcon from '../../assets/icons/hubkut-icon.png'
import LinkItem from '../LinkItem'
import Sidebar from '../Sidebar'
import SideBarButton from '../SidebarButton'

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
              <LinkItem title="Início" href="/home" />
              <LinkItem title="Pull Requests" href="https://github.com/pulls" variant="primary" target='qqqqqqq21blank' />
              <LinkItem title="Issues" href="https://github.com/issues" variant="primary" target='blank' />
              <LinkItem title="Marketplace" href="https://github.com/marketplace" variant="primary" target='blank' />
              <LinkItem title="Explore" href="https://github.com/explore" variant="primary" target='blank' />
            </LinksContainer>
            <SearchContainer>
              <LinkItem title="Sair" href="/" variant="primary" />
            </SearchContainer>
          </MenuWrapper>
      </Container>
    </Wrapper>
  )
}

export default Header