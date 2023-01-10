import React from 'react'
import { Link } from 'react-router-dom'
import { Container, InfoContainer } from './styles'

const RepoPageItem = ({ to, title, description, language }) => {
  return (
    <a href={to} target='blank'>
      <Container>
          <InfoContainer>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <ul>
              <li>{language}</li>
            </ul>
          </InfoContainer>
      </Container>
    </a>
  )
}

export default RepoPageItem