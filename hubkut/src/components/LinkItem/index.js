import React from 'react'
import { Container } from './styles'

const LinkItem = ({variant, title, href, target}) => {
  return (
    <Container variant={variant} href={href} target={target}>{title}</Container>
  )
}

export default LinkItem