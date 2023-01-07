import React from 'react'
import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'


const FollowingSection = ({numOfFollwing, avatarUser, userName}) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguindo</h3>
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
        ><Link to='/perfil'><div><p>{userName}</p></div></Link></li>
      </ul>
      <Link to='/following'>
        <h5>Ver todos</h5>
      </Link>
    </Container>
  )
}

export default FollowingSection