import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'



const FollowersSection = ({numOfFollwing, avatarUser, userName, followerItem}) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguidores</h3>
        <p>({numOfFollwing})</p>
      </TitleContainer>
      <ul>
        {followerItem}
      </ul>
      <Link to='/followers'>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowersSection