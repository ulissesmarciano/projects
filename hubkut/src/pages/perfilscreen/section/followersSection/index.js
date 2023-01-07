import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'

export const User = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'


const FollowersSection = ({numOfFollwing, avatarUser, userName}) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguidores</h3>
        <p>({numOfFollwing})</p>
      </TitleContainer>
      <ul>
      <li
          style={{
            backgroundImage: `url(${avatarUser})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100px',
            width:'80px',
            height: '100px',
  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',

            borderRadius: '6px',
          }}
        ><Link to='/'><div><p>{userName}</p></div></Link></li>
      </ul>
      <Link to='/followers'>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowersSection