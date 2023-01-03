import React from 'react'
import { Container } from './styles'

import ItemRepo from '../../../../components/RepoItem'

const LastRepoSection = () => {
  return (
    <Container>
      <h3>Meus últimos repositóries:</h3>
      <div>
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" />
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" />
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" />
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" />
        <ItemRepo urlRepo="ulissesmarciano/hubkut" nameRepo="Github + Orkut" />
      </div>
    </Container>
  )
}

export default LastRepoSection