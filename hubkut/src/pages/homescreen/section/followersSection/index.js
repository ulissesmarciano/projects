import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'



const FollowersSection = ({numOfFollowers, toPageFollowers, followerItem}) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguidores</h3>
        <p>({numOfFollowers})</p>
      </TitleContainer>
      <ul>
        {followerItem}
      </ul>
      <Link to={toPageFollowers}>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowersSection