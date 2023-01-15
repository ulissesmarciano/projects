import React from 'react'
import { Container } from './styles'
import { ILinkItem } from './types'

const LinkItem = ({variant, title, href, target}:ILinkItem) => {
  return (
    <Container variant={variant} href={href} target={target}>{title}</Container>
  )
}

export default LinkItem