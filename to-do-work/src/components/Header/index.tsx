import React, { useState } from 'react'
import { Container, LogoContainer, SidebarContainer, LinkContainer, ButtonContainer } from './styles'

import Logo from '../../assets/logo.png'
import SidebarButton from '../SidebarButton'
import { IHeader } from './types'
import Sidebar from '../Sidebar'
import Button from '../Button'
import ToggleButton from '../Toggle'

const Header = ({variant, onChange, closeIconVariant, headerVariant, toLogon }:IHeader) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container variant={headerVariant}>
      <LogoContainer>
        <img src={Logo} alt="Logotipo do Aplicativo" />
      </LogoContainer>
      <LinkContainer>
        Menu 1
        <span/>
        Menu 2
        <span/>
        Menu 3
        <span/>
      </LinkContainer>
        <ButtonContainer>
          <Button to='logon' title='entrar' variant='forth' />
          <Button to='logon' title='cadastrar' variant='forth' />
          <ToggleButton onChange={onChange}/>
        </ButtonContainer>
      <SidebarContainer>
        <SidebarButton onClick={showSidebar} variant={variant}/>
        {sidebar && <Sidebar 
          active={setSidebar}
          onChange={onChange}
          closeIconVariant={closeIconVariant}
          toLogon={toLogon}
        /> }
      </SidebarContainer>
    </Container>
  )
}

export default Header