import React from 'react'

import { Container, TitleContainer } from './styles'

export const User = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'


const FollowersSection = () => {
  return (
    <Container>
      <TitleContainer>
        <h3>Seguidores</h3>
        <p>(1.1k)</p>
      </TitleContainer>
      <ul>
      <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
         <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
         <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
         <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
         <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
         <li
          style={{
            backgroundImage: `url(${User})`,
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
        ><div><p>user</p></div></li>
      </ul>
      <a href='/followers'>
        <h5>Ver todos</h5>
      </a>
    </Container>
  )
}

export default FollowersSection