import React from 'react'
import { ButtonContainer } from './styles'
import { IButton } from './types'

const Button = ({variant, href, title }:IButton) => {
  return (
    <ButtonContainer variant={variant} href={href} target="_blank">
      <p>{title}</p>
    </ButtonContainer>
  )
}

export default Button