import React from 'react'
import { Link } from 'react-router-dom'
import { AvatarContainer, Container, InfoContainer, TitleContainer } from './styles'

const UserListItem = ({to, avatar, name }) => {
  return (
    <Link to={to}>
      <Container>
        <AvatarContainer>
          <img src={avatar} alt='foto de perfil'/>
        </AvatarContainer>
        <InfoContainer>
          <TitleContainer>
            <h3>{name}</h3>
          </TitleContainer>
        </InfoContainer>
      </Container>
    </Link>
  )
}

export default UserListItem