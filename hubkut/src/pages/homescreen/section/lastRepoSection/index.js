import React from 'react'
import { Container } from './styles'

import ItemRepo from '../../../../components/RepoItem'

const LastRepoSection = ({href}) => {
  return (
    <Container>
      <h3>Meus últimos repositórios:</h3>
      <div>
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" href={href}/>
      </div>
    </Container>
  )
}

export default LastRepoSection