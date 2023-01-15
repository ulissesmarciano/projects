import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { IUserButton } from './types'

const UserButton = ({to}:IUserButton) => {
  return (
    <Link to={to}>
      <Container>
        Entrar
      </Container>
    </Link>
  )
}

export default UserButton