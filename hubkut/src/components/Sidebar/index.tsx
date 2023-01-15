import React from 'react'
import SideBarCloseButton from '../SidebarCloseButton'
import { Container } from './styles'
import { ISidebar } from './types'

const Sidebar = ({active}:ISidebar) => {
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