import React from 'react'
import Button from '../../../../components/Button'
import { ButtonContainer, Container } from './styles'

const ToDoSection = () => {
  return (
    <Container>
      <div>
        <h3>O que você deseja fazer?</h3>
      </div>
      <ButtonContainer>
        <Button title='Criar repositório'/>
        <Button variant={!'primary'} title='Clonar Repositório'/>
        <Button variant={!'primary'}  title='Suas Estrelas'/>
        <Button variant={!'primary'} />
      </ButtonContainer>
    </Container>
  )
}

export default ToDoSection