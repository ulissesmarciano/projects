import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Border } from './styles'

const Button = () => {
  return (
    <Link to='/logon'>
      <Border>
        <Container>
          Comece Agora
        </Container>
      </Border>
    </Link>
  )
}

export default Button