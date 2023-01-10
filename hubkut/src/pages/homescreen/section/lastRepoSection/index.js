import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'


const LastRepoSection = ({itemRepositorie, sectionHref}) => {
  return (
    <Container>
      <h3>Meus últimos repositórios:</h3>
      <ul>
        {itemRepositorie}
      </ul>
      <Link to={sectionHref}>
        <p className='linkSection'>Ver todos</p>
      </Link>
    </Container>
  )
}

export default LastRepoSection