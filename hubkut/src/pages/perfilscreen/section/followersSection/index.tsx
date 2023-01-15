import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'
import { IFollowersSection } from './types'

export const User = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'


const FollowersSection = ({numOfFollowers, itemRepo, followersHref}: IFollowersSection) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguidores</h3>
        <p>({numOfFollowers})</p>
      </TitleContainer>
      <ul>
        {itemRepo}
      </ul>
      <Link to={`/followers/${followersHref}`}>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowersSection