import React from 'react'
import { ButtonContainer } from './styles'

const SideBarCloseButton = ({onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      <div />
      <div />
    </ButtonContainer>
  )
}

export default SideBarCloseButton