import React, { useState } from 'react'
import { Container, ImageContainer } from './styles'

import Logo from '../../assets/logo.png'
import SidebarButton from '../SidebarButton'
import { IHeader } from './types'
import Sidebar from '../Sidebar'

const Header = ({variant, onChange, closeIconVariant, headerVariant, toLogon }:IHeader) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container variant={headerVariant}>
      <ImageContainer>
        <img src={Logo} alt="Logotipo do Aplicativo" />
      </ImageContainer>
      <div>
        <SidebarButton onClick={showSidebar} variant={variant}/>
        {sidebar && <Sidebar 
        active={setSidebar}
        onChange={onChange}
        closeIconVariant={closeIconVariant}
        toLogon={toLogon}
        /> }
      </div>
    </Container>
  )
}

export default Header