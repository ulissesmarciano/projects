import React from 'react'
import PerfilItem from '../../../../components/PerfilItem'

import { Container, InfoContainer } from './styles'

import CompanyIcon from '../../../../assets/icons/company-icon.png'
import PinIcon from '../../../../assets/icons/pin-icon.png'
import MailIcon from '../../../../assets/icons/mail-icon.png'
import LinkIcon from '../../../../assets/icons/link-icon.png'
import TwitterIcon from '../../../../assets/icons/twitter-icon.png'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const PerfilSection = () => {
  return (
    <Container>
      <img className='avatar' src={PerfilImage} alt='foto de perfil'/>
      <hr/>
      <h2>Ulisses Marciano</h2>
      <p>Front-end Developer</p>
      <hr/>
      <InfoContainer>
        <PerfilItem src={CompanyIcon} title='@Estágio' />
        <PerfilItem src={PinIcon} title='Campinas/SP' />
        <PerfilItem src={MailIcon} title='ulissesmkt2104@gmail.com' href="mailto:ulissesmkt2104@gmail.com" target="blank"/>
        <PerfilItem src={LinkIcon} title='https://ulissesmarciano.github.io/portfolio-ulisses' />
        <PerfilItem src={TwitterIcon} title='@ulissesmarciano' />
      </InfoContainer>
    </Container>
  )
}

export default PerfilSection