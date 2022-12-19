import React from 'react'

import { SidebarCloseButton } from '../SidebarCloseButton';

import {ButtonCloseContainer, Container, Content, FilterButton} from './styles'

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
        <h2>Filtro</h2>
        
      </Content>
    </Container>
  )
}


export  { Sidebar }