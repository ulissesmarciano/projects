import React from 'react'
import { ButtonContainer } from './styles'

const SideBarButton = ({onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      <div />
      <div />
      <div />
    </ButtonContainer>
  )
}

export default SideBarButton