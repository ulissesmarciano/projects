import React from 'react'

import { ButtonContainer } from './styles'

const SidebarButton = ({onClick}) => {
  return (
    <div>
      <ButtonContainer onClick={onClick}>
        <span className='line1'/>
        <span className='line2'/>
        <span className='line3'/>
      </ButtonContainer>
    </div>
  )
}

export { SidebarButton }