import React from 'react'
import { Link } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'

import RepoPageItem from '../../components/RepoPageItem'


const StarredScreen = () => {
  return (
    <Container>
      <div className='backLink'>
        <Link to='/home' >voltar</Link>
      </div>
      <RepositorieContainer>
        <li>
          <RepoPageItem 
          to=''
          title='decolatech3-dio-curso-introducao-ao-javascript'
          description='Repositório sobre o curso de introdução ao JavaScript'
          language='JavaScript'
          />
        </li>
      </RepositorieContainer>
    </Container>
  )
}

export default StarredScreen