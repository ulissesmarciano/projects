import React from 'react'
//import { Link } from 'react-router-dom'
import { Container, Border } from './styles'
import { IButton } from './types'

const Button = ({to, variant, title, onClick}:IButton) => {
  return (
    <a href={to} >
      <Border variant={variant}>
        <Container variant={variant} onClick={onClick}>
          {title}
        </Container>
      </Border>
    </a>
  )
}

export default Button