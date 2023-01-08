import React from 'react'
import { Link } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'

import UserListItem from '../../components/UserListItem'

const FollowingScreen = () => {
  return (
    <Container>
      <div className='backLink'>
        <Link to='/home' >voltar</Link>
      </div>
      <RepositorieContainer>
        <li>
          <UserListItem />
        </li>
      </RepositorieContainer>
    </Container>
  )
}


export default FollowingScreen