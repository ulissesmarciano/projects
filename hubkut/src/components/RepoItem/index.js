import React from 'react'
import { ItemContainer, TitleContainer, StarContainer } from './styles'

import RepoIcon from '../../assets/icons/repositories-icon.png'
import StarIcon from '../../assets/icons/starred-icon.png'

const ItemRepo = ({urlRepo, nameRepo}) => {
  return (
    <ItemContainer>
      <TitleContainer>
        <div>
        <img src={RepoIcon}  alt="ícone de repositório"/>
          <h3>{urlRepo}</h3>
        </div>
          <h4>{nameRepo}</h4>
      </TitleContainer>
      <StarContainer>
        <img src={StarIcon} alt="ícone de estrela" />
        <p>Star</p>
      </StarContainer>
    </ItemContainer>
  )
}

export default ItemRepo