import React from 'react'
import { ButtonContainer } from './styles'
import { GrFormClose } from 'react-icons/gr';
import { ISidebarCloseButton } from './types';

const CloseButton = ({onClick, variant}:ISidebarCloseButton) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      <GrFormClose/>
    </ButtonContainer>
  )
}

export default CloseButton