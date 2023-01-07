import React from 'react'
import { Link } from 'react-router-dom'
import { AvatarContainer, Container, InfoContainer, TitleContainer, EmployContainer } from './styles'

import CompanyIcon from '../../assets/icons/company-icon.png'
import PinIcon from '../../assets/icons/pin-icon.png'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const UserListItem = () => {
  return (
    <Link to='/perfil'>
      <Container>
        <AvatarContainer>
          <img src={PerfilImage} alt='foto de perfil'/>
        </AvatarContainer>
        <InfoContainer>
          <TitleContainer>
            <h3>Ulisses Marciano</h3>
            <p>Front End Developer web and mobile, passionate to javascript and all your ecosystem.</p>
          </TitleContainer>
          <EmployContainer>
            <div>
              <img src={CompanyIcon} alt='ícone da empresa'/>
              <p>@estagio</p>
            </div>
            <div>
              <img src={PinIcon} alt='ícone da da localização'/>
              <p>@estagio</p>
            </div>
          </EmployContainer>
        </InfoContainer>
      </Container>
    </Link>
  )
}

export default UserListItem