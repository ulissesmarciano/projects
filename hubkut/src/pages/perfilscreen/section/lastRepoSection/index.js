import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

const LastRepoSection = ({resume, sectionHref, itemRepo}) => {
  return (
    <Container>
      <h3 className='titletext'>Bio:</h3>
      <p className='biotext'>{resume}</p>
      <h3>Repositórios:</h3>
      <div>
        {itemRepo}
      </div>
      <Link to={sectionHref}>
        <p className='linkSection'>Ver todos</p>
      </Link>
    </Container>
  )
}

export default LastRepoSection