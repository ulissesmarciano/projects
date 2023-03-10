import React, { useState } from 'react'
import { FullContainer, IconContainer, UserFormContainer, PhraseContainer, UserLoginContainer, UserLogonContainer, LoginContainer } from './styles'

import HubkutIcon from '../../assets/icons/hubkut-icon.png'
import UserForm from '../../components/UserForm'
import UserButton from '../../components/UserButton'

const Login = () => {
  const [getUser, setGetUser] = useState('')

  return (
    <FullContainer>
      <IconContainer>
        <img className='logotype' src={HubkutIcon} alt="logotipo da plataforma"/>
        <PhraseContainer>
          <p><span>Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
          <p><span>Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
          <p><span>Compartilhe</span> seus repositórios, fotos e paixões em um só lugar</p>
        </PhraseContainer>
        <UserFormContainer>
          Usuário:
          <UserForm
            onChange={(e) => setGetUser(e.target.value)}
          />
          <UserButton to={`/home/${getUser}`}  />
        </UserFormContainer>
      </IconContainer>
      <LoginContainer>
        <UserLoginContainer>
          <p>Acesse o hubkut com sua conta</p>
          <div className='userInputContainer'>
            Usuário:
          <span/>
            <UserForm
              onChange={(e) => setGetUser(e.target.value)}
            />
          </div>
          <span className='buttonSpace'>
            <UserButton to={`/home/${getUser}`}  />
          </span>
        </UserLoginContainer>
        <UserLogonContainer>
          <p>Ainda não é membro?</p>
          <a href='https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home' target="blank">ENTRAR JÁ</a>
        </UserLogonContainer>
      </LoginContainer>
    </FullContainer>
  )
}

export default Login