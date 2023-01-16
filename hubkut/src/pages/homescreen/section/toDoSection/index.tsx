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
        <Button variant={'primary'} title='Criar repositório' href="https://github.com/new"/>
        <Button variant={!'primary'} title='Clonar Repositório'/>
        <Button variant={!'primary'}  title='Suas Estrelas'/>
        <Button variant={!'primary'} title='Novo Gist'/>
      </ButtonContainer>
    </Container>
  )
}

export default ToDoSection