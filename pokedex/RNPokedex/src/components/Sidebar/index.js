import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { POKEMON_TYPES } from '../../util/constants'

import { SidebarContainer, OptionsContainer, Title, Link, LinkText, TypeLink, ItemName } from './styles'

const SideBar = ({filterAlphabet, filterEgg}) => {
  const [showType, setShowType] = useState(true)
  const changeButtonType = () => {
    setShowType(false)
  }

  const pokeData = POKEMON_TYPES.map((item) => item.name)

 
  return (
    <SidebarContainer>
      <OptionsContainer>
        <Title>Order by</Title>
        <Link onPress={filterAlphabet}><LinkText>Alphabet</LinkText></Link>
        <Link onPress={changeButtonType}>
          {showType ? <LinkText>Type</LinkText> : 
            <FlatList
            data={pokeData}
            numColumns={3}
            renderItem={(item) =>
                <TypeLink >
                  <ItemName>{item.item}</ItemName>
                </TypeLink>
            }
            />
          }
        </Link>
        <Link onPress={filterEgg}><LinkText>Egg Cycle</LinkText></Link>
      </OptionsContainer>
    </SidebarContainer>
    )
}

export default SideBar