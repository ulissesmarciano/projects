import React, { useState } from 'react'
import HubkutIcon from '../../assets/icons/hubkut-icon.png'
import Sidebar from '../Sidebar'
import SideBarButton from '../SidebarButton'
import {Wrapper, Container, IconContainer } from './styles'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <Wrapper>
      <Container>
          <IconContainer>
              <img src={HubkutIcon} alt="ícone da página"/>
          </IconContainer>
          <div>
            <SideBarButton onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar}/>}
          </div>
      </Container>
    </Wrapper>
  )
}

export default Header