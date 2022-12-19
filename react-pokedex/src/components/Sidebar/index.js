import React from 'react'

import { SidebarCloseButton } from '../SidebarCloseButton';

import {ButtonCloseContainer, Container, Content} from './styles'

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }
  return (
    <Container sidebar={active}>
      <ButtonCloseContainer>
        <SidebarCloseButton onClick={closeSidebar} />  
      </ButtonCloseContainer>
      <Content>
          
      </Content>
    </Container>
  )
}


export  { Sidebar }