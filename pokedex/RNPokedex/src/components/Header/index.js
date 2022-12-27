import React, { useState } from 'react'

import SidebarButton from '../SidebarButton'
import PokeSearch from '../../assets/icons/searchicon.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import SideBar from '../Sidebar';

import { Container, ButtonContainer, ButtonSearch, SearchButtonImage, SearchContainer, DisplayTop, SearchOrientation, Input, InputContainer } from './styles'

export default function Header({ onChangeText, filterAlphabet, filterEgg, filterType }) {
  const [showSearch, setShowSearch] = useState(false)
  const [showSideBar, setShowSidebar] = useState(false)
  
  return (
      <Container>
        <ButtonContainer>
          <ButtonSearch onPress={() => setShowSearch(!showSearch)}>
            <SearchButtonImage source={PokeSearch}/>
          </ButtonSearch>
        </ButtonContainer>
        <SearchOrientation>
          <SearchContainer>
            {showSearch && 
              <InputContainer>
                <Icon name="search" size={18} color="#ffffff90" />
                  <Input
                  placeholder="Busque por Nome"
                  placeholderTextColor="#ffffff90"
                  style={{fontSize:15, color: "white", fontWeight: "600"}}
                  onChangeText={onChangeText}
                  />
              </InputContainer>
            }
          </SearchContainer>
          <DisplayTop>
          </DisplayTop>
        </SearchOrientation>
          <SidebarButton onClick={() => setShowSidebar(!showSideBar)}/>
          {showSideBar && <SideBar
          filterAlphabet={filterAlphabet}
          filterType={filterType}
          filterEgg={filterEgg}
          />}
      </Container>
  )
}