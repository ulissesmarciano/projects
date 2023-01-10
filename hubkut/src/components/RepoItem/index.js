import React from 'react'
import { ItemContainer, TitleContainer, StarContainer } from './styles'

import RepoIcon from '../../assets/icons/repositories-icon.png'
import StarIcon from '../../assets/icons/starred-icon.png'

const ItemRepo = ({urlRepo, nameRepo, href, key}) => {
  return (
    <ItemContainer key={key} >
      <TitleContainer>
        <div className='imageLinkOrientation'>
        <img src={RepoIcon}  alt="ícone de repositório"/>
          <a href={href} target="blank">
            <h3>{urlRepo}</h3>
          </a>
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