import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const StarredScreen = () => {
  return (
    <Container>
      StarredScreen
      <Link to="/">voltar</Link>
    </Container>
  )
}

export default StarredScreen