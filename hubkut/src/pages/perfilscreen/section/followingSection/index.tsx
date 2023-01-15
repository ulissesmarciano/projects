import React from 'react'
import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'
import { IFollowingSection } from './types'


const FollowingSection = ({numOfFollwing, perfilUser, followingHref}:IFollowingSection) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguindo</h3>
        <p>({numOfFollwing})</p>
      </TitleContainer>
      <ul>
        {perfilUser}
      </ul>
      <Link to={`/followers/${followingHref}`}>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowingSection