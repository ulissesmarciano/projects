import React from 'react'
import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'


const FollowingSection = ({numOfFollwing, followingItem, toPageFollowing}) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguindo</h3>
        <p>({numOfFollwing})</p>
      </TitleContainer>
      <ul>
        {followingItem}
      </ul>
      <Link to={toPageFollowing}>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowingSection