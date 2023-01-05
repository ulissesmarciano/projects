import React from 'react'
import { Container } from './styles'

//import CompanyIcon from '../../assets/icons/company-icon.png'

const PerfilItem = ({src, title, href, target}) => {
  return (
    <Container>
      <img src={src} alt=""/>
      <a href={href} target={target}>{title}</a>
    </Container>
  )
}

export default PerfilItem