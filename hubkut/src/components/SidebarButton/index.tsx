import React from 'react'
import { ButtonContainer } from './styles'
import { ISidebarButton } from './types'

const SideBarButton = ({onClick}:ISidebarButton) => {
  return (
    <ButtonContainer onClick={onClick}>
      <div />
      <div />
      <div />
    </ButtonContainer>
  )
}

export default SideBarButton