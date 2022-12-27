import { View, Text } from 'react-native'
import React from 'react'

import { SidebarContainer, OptionsContainer, Title, Link, LinkText } from './styles'

const SideBar = () => {
  return (
    <SidebarContainer>
      <OptionsContainer>
        <Title>Order by</Title>
        <Link><LinkText>Alphabet</LinkText></Link>
        <Link><LinkText>Type</LinkText></Link>
        <Link><LinkText>Egg Cycle</LinkText></Link>
      </OptionsContainer>
    </SidebarContainer>
    )
}

export default SideBar