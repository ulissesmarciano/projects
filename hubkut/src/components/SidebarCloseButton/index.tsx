import React from 'react'
import { ButtonContainer } from './styles'
import { GrFormClose } from 'react-icons/gr';
import { ISidebarCloseButton } from './types';

const SideBarCloseButton = ({onClick}:ISidebarCloseButton) => {
  return (
    <ButtonContainer onClick={onClick}>
      <GrFormClose/>
    </ButtonContainer>
  )
}

export default SideBarCloseButton