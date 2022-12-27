import { View, Text } from 'react-native'
import React from 'react'

import { Container, LineButton1, LineButton2, LineButton3 } from './styles'

export default function SidebarButton({onClick}) {
  return (
    <Container onPress={onClick}>
        <LineButton1 />
        <LineButton2 />
        <LineButton3 />
    </Container>
  )
}