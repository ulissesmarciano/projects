import React from 'react'
import Button from '../Button'
import CloseButton from '../Closebutton'
import ToggleButton from '../Toggle'
import { Container, HeadContainer, MenuContainer, ToggleContainer, ButtonContainer } from './styles'
import { ISidebar } from './types'
import { BrowserRouter as Router } from 'react-router-dom'


const Sidebar = ({active, onChange, closeIconVariant, toLogon }:ISidebar) => {
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
      <ButtonContainer>
        <Router>
            <Button to={toLogon} variant='secondary' title='cadastrar' onClick={closeSidebar} />
            <Button to='/logon' variant='third' title='entrar' onClick={closeSidebar}/>
        </Router>
      </ButtonContainer>
      <ToggleContainer>
        <ToggleButton onChange={onChange}/>
      </ToggleContainer>
    </Container>
  )
}

export default Sidebar