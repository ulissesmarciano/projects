import React from 'react'
import CloseButton from '../Closebutton'
import ToggleButton from '../Toggle'
import { Container, HeadContainer, MenuContainer, ToggleContainer } from './styles'
import { ISidebar } from './types'

const Sidebar = ({active, onChange, closeIconVariant}:ISidebar) => {
  const closeSidebar = () => {
    active(false)
  }
  return (
    <Container sidebar={active}>
      <HeadContainer>
        <CloseButton onClick={closeSidebar} variant={closeIconVariant}/>
      </HeadContainer>
      <MenuContainer>
        Menu 1
        <div className='line'/>
        Menu 2
        <div className='line'/>
        Menu 3
      </MenuContainer>
      <ToggleContainer>
        <ToggleButton onChange={onChange}/>
      </ToggleContainer>
    </Container>
  )
}

export default Sidebar