import { View, Text } from 'react-native'
import React from 'react'

import { SidebarContainer, OptionsContainer, Title, Link, LinkText } from './styles'

const SideBar = ({filterAlphabet, filterType, filterEgg}) => {
  return (
    <SidebarContainer>
      <OptionsContainer>
        <Title>Order by</Title>
        <Link onPress={filterAlphabet}><LinkText>Alphabet</LinkText></Link>
        <Link onPress={filterType}><LinkText>Type</LinkText></Link>
        <Link onPress={filterEgg}><LinkText>Egg Cycle</LinkText></Link>
      </OptionsContainer>
    </SidebarContainer>
    )
}

export default SideBar