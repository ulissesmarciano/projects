import React from 'react'
import SideBarCloseButton from '../SidebarCloseButton'
import { Container } from './styles'

const Sidebar = ({active}) => {
  const closeSidebar = () => {
    active(false)
  }
  return (
    <Container sidebar={active}>
      <SideBarCloseButton onClick={closeSidebar}/>
    </Container>
  )
}

export default Sidebar