import React from 'react'
import { Container, GreetingContainer, InfoDataContainer, InfoContainer, ItemCountContainer } from './styles'

import RepositorieIcon from '../../../../assets/icons/repositories-icon.png'
import StarredIcon from '../../../../assets/icons/starred-icon.png'
import FollowersIcon from '../../../../assets/icons/user-icon.png'
import FollowingIcon from '../../../../assets/icons/following-icon.png'


const Greetings = () => {
  return (
    <Container>
        <GreetingContainer>
          <h2>Bem-vindo(a), Ulisses</h2>
          <p><strong>Sorte de hoje: </strong>Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.</p>
        </GreetingContainer>
        <InfoDataContainer>
          <InfoContainer>
            <h4>Repositórios</h4>
            <ItemCountContainer>
              <img src={RepositorieIcon} alt='icone'/>
              <p>64</p>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Favoritos</h4>
            <ItemCountContainer>
              <img src={StarredIcon} alt='icone'/>
              <p>1.4k</p>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Seguidores</h4>
            <ItemCountContainer>
              <img src={FollowersIcon} alt='icone'/>
              <p>1.1k</p>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Seguindo</h4>
            <ItemCountContainer>
              <img src={FollowingIcon} alt='icone'/>
              <p>216</p>
            </ItemCountContainer>
          </InfoContainer>
        </InfoDataContainer>
      </Container>
  )
}

export default Greetings