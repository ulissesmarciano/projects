import React from 'react'
import { Container } from './styles'
import { ISidebarButton } from './types'

const SidebarButton = ({variant, onClick}:ISidebarButton) => {
  return (
    <Container onClick={onClick} variant={variant}>
      <div/>
      <div/>
      <div/>
    </Container>
  )
}

export default SidebarButton