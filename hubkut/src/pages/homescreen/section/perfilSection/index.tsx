import React from 'react'
import PerfilItem from '../../../../components/PerfilItem'

import { Container, InfoContainer } from './styles'

import CompanyIcon from '../../../../assets/icons/company-icon.png'
import PinIcon from '../../../../assets/icons/pin-icon.png'
import MailIcon from '../../../../assets/icons/mail-icon.png'
import LinkIcon from '../../../../assets/icons/link-icon.png'
import TwitterIcon from '../../../../assets/icons/twitter-icon.png'
import { IPerfilSection } from './types'


const PerfilSection = ({src, username, companyName, pinName, mailHref, mailName, twitterHref, twitterUsername, portfolioLinkName, portfolioHref }: IPerfilSection) => {
  return (
    <Container>
      <img className='avatar' src={src} alt='foto de perfil'/>
      <h2>{username}</h2>
      <hr/>
      <InfoContainer>
        <PerfilItem src={CompanyIcon} title={companyName} />
        <PerfilItem src={PinIcon} title={pinName} />
        <PerfilItem src={MailIcon} title={mailName} href={mailHref} target="blank"/>
        <PerfilItem src={LinkIcon} title={portfolioLinkName} href={portfolioHref}  target="blank"/>
        <PerfilItem src={TwitterIcon} title={twitterUsername} href={twitterHref} target="blank"/>
      </InfoContainer>
    </Container>
  )
}

export default PerfilSection