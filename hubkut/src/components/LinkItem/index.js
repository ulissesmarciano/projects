import React from 'react'
import { Container } from './styles'

const LinkItem = ({variant, title, href}) => {
  return (
    <Container variant={variant} href={href}>{title}</Container>
  )
}

export default LinkItem