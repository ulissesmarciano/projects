import React from 'react'

import { ButtonContainer } from './styles'

const SidebarCloseButton = ({onClick}) => {
  return (
    <div>
      <ButtonContainer onClick={onClick}>
          <span className='line1'/>
          <span className='line2'/>
          
      </ButtonContainer>
    </div>
  )
}

export { SidebarCloseButton }