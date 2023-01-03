import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({variant="primary", href, title}) => {
  return (
    <ButtonContainer variant={variant} href={href}>
      <p>{title}</p>
    </ButtonContainer>
  )
}

export default Button