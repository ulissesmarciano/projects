import {View, Text } from 'react-native'
import React, { useState } from 'react'


import SidebarButton from '../SidebarButton'
import PokeSearch from '../../assets/icons/searchicon.png'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, ButtonContainer, ButtonSearch, SearchButtonImage, SearchContainer, DisplayTop, SearchOrientation, Input, InputContainer } from './styles'

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  return (
      <Container>
        <ButtonContainer>
          <ButtonSearch onPress={() => setShowSearch(!showSearch)}>
            {showSearch ? false : true}
            <SearchButtonImage source={PokeSearch}/>
          </ButtonSearch>
        </ButtonContainer>
        <SearchOrientation>
          <SearchContainer>
            {showSearch && <InputContainer>
            <Icon name="search" size={18} color="#ffffff90" />
              <Input 
              placeholder="Busque por Nome ou Número"
              placeholderTextColor="#ffffff90"
              style={{fontSize:15, color: "white", fontWeight: "600"}}
              />
            </InputContainer>}
          </SearchContainer>
          <DisplayTop>
          </DisplayTop>
        </SearchOrientation>
        <SidebarButton/>
      </Container>
  )
}