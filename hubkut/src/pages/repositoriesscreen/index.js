import React from 'react'
import { Link } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'

import RepoPageItem from '../../components/RepoPageItem'


const RepositorieScreen = () => {
  return (
    <Container>
      <div className='backLink'>
        <Link to='/home' >voltar</Link>
      </div>
      <RepositorieContainer>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
        <li>
          <RepoPageItem />
        </li>
      </RepositorieContainer>
    </Container>
  )
}

export default RepositorieScreen