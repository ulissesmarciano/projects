import React from 'react'
import HubkutIcon from '../../assets/icons/hubkut-icon.png'
import Sidebar from '../Sidebar'
import SideBarButton from '../SidebarButton'
import { Container, IconContainer } from './styles'

const Header = () => {

  return (
    <Container>
        <IconContainer>
            <img src={HubkutIcon} alt="ícone da página"/>
        </IconContainer>
        <div>
          <SideBarButton />
          <Sidebar/>
        </div>
    </Container>
  )
}

export default Header