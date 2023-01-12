import React from 'react'
import PerfilItem from '../../../../components/PerfilItem'

import { Container, InfoContainer } from './styles'

import CompanyIcon from '../../../../assets/icons/company-icon.png'
import PinIcon from '../../../../assets/icons/pin-icon.png'
import MailIcon from '../../../../assets/icons/mail-icon.png'
import LinkIcon from '../../../../assets/icons/link-icon.png'
import TwitterIcon from '../../../../assets/icons/twitter-icon.png'


const PerfilSection = ({src, perfilName, companyName, pinName, mailHref, mailName, linkName, twitterUserame }) => {

  return (
    <Container>
        <img className='avatar' src={src} alt='foto de perfil'/>
      <div className='titleAndDescritpionContainer'>
        <h2>{perfilName}</h2>
        <hr/>
      </div>
      <InfoContainer>
        <PerfilItem src={CompanyIcon} title={companyName} />
        <PerfilItem src={PinIcon} title={pinName} />
        <PerfilItem src={MailIcon} title={mailName} href={mailHref} target="blank"/>
        <PerfilItem src={LinkIcon} title={linkName} />
        <PerfilItem src={TwitterIcon} title={twitterUserame} />
      </InfoContainer>
    </Container>
  )
}

export default PerfilSection