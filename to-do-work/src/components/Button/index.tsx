import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Border } from './styles'
import { IButton } from './types'

const Button = ({to, variant, title}:IButton) => {
  return (
    <Link to={to}>
      <Border variant={variant}>
        <Container variant={variant}>
          {title}
        </Container>
      </Border>
    </Link>
  )
}

export default Button