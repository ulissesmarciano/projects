import React from 'react'
import { InputContainer } from './styled'

const UserForm = ({onChange}) => {
  return (
      <InputContainer type="text" placeholder="Nome de usuário" onChange={onChange}/>
  )
}

export default UserForm