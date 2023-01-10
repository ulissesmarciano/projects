import React from 'react'
import { Link } from 'react-router-dom'

import { Container, GreetingContainer, InfoDataContainer, InfoContainer, ItemCountContainer } from './styles'

import RepositorieIcon from '../../../../assets/icons/repositories-icon.png'
import StarredIcon from '../../../../assets/icons/starred-icon.png'
import FollowersIcon from '../../../../assets/icons/user-icon.png'
import FollowingIcon from '../../../../assets/icons/following-icon.png'


const Greetings = ({toRepo, toStarred, toFollowing, toFollowers, name, repoNum, starredNum, followersNum, followingNum, resume}) => {
  return (
    <Container>
        <GreetingContainer>
          <h2>Bem-vindo(a), {name}</h2>
          <p>{resume}</p>
        </GreetingContainer>
        <InfoDataContainer>
          <InfoContainer>
            <h4>Repositórios</h4>
            <ItemCountContainer>
              <img src={RepositorieIcon} alt='icone'/>
              <Link to={toRepo}><p>{repoNum}</p></Link>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Favoritos</h4>
            <ItemCountContainer>
              <img src={StarredIcon} alt='icone'/>
              <Link to={toStarred}><p>{starredNum}</p></Link>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Seguidores</h4>
            <ItemCountContainer>
              <img src={FollowersIcon} alt='icone'/>
              <Link to={toFollowers}><p>{followersNum}</p></Link>
            </ItemCountContainer>
          </InfoContainer>
          <InfoContainer>
            <h4>Seguindo</h4>
            <ItemCountContainer>
              <img src={FollowingIcon} alt='icone'/>
              <Link to={toFollowing}><p>{followingNum}</p></Link>
            </ItemCountContainer>
          </InfoContainer>
        </InfoDataContainer>
      </Container>
  )
}

export default Greetings