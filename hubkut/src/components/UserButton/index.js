import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const UserButton = ({to}) => {
  return (
    <Link to={to}>
      <Container>
        Entrar
      </Container>
    </Link>
  )
}

export default UserButton