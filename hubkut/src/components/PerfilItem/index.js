import React from 'react'
import { Container } from './styles'

//import CompanyIcon from '../../assets/icons/company-icon.png'

const PerfilItem = ({src, title, href}) => {
  return (
    <Container>
      <img src={src} alt=""/>
      <a href={href}>{title}</a>
    </Container>
  )
}

export default PerfilItem