import React from 'react'
import { ButtonContainer } from './styles'
import { GrFormClose } from 'react-icons/gr';

const SideBarCloseButton = ({onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
      <GrFormClose/>
    </ButtonContainer>
  )
}

export default SideBarCloseButton