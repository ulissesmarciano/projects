import React from 'react'
import { InputContainer } from './styled'
import { IUserForm } from './types'

const UserForm = ({onChange}:IUserForm) => {
  return (
      <InputContainer type="text" placeholder="Nome de usuário" onChange={onChange}/>
  )
}

export default UserForm