import React from 'react'

import { FiX } from 'react-icons/fi';

import {ButtonCloseContainer, Container, Content} from './styles'

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }
  return (
    <Container sidebar={active}>
      <ButtonCloseContainer>
        <FiX onClick={closeSidebar} />  
      </ButtonCloseContainer>
      <Content>
          
      </Content>
    </Container>
  )
}


export  { Sidebar }