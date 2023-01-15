import React from 'react'
import { ItemContainer, TitleContainer } from './styles'

import RepoIcon from '../../assets/icons/repositories-icon.png'
import { IRepoItem } from './types'

const ItemRepo = ({urlRepo, nameRepo, href, key}:IRepoItem) => {
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
    </ItemContainer>
  )
}

export default ItemRepo