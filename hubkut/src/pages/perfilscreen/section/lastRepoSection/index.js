import React from 'react'
import { Container } from './styles'

import ItemRepo from '../../../../components/RepoItem'

const LastRepoSection = ({href, nameRepo, urlRepo}) => {
  return (
    <Container>
      <h3>Meus últimos repositórios:</h3>
      <div>
        <ItemRepo urlRepo={urlRepo} nameRepo={nameRepo} href={href}/>
      </div>
    </Container>
  )
}

export default LastRepoSection