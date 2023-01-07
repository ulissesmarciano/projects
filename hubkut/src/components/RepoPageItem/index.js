import React from 'react'
import { Link } from 'react-router-dom'
import { Container, InfoContainer } from './styles'

const RepoPageItem = () => {
  return (
    <Link>
      <Container>
          <InfoContainer>
            <div>
              <h3>decolatech3-dio-curso-introducao-ao-javascript</h3>
              <p>Repositório sobre o curso de introdução ao JavaScript</p>
            </div>
            <ul>
              <li>HTML</li>
              <li>JavaScript</li>
            </ul>
          </InfoContainer>
          <div>
            Public
          </div>
      </Container>
    </Link>
  )
}

export default RepoPageItem