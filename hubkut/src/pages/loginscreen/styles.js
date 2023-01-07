import styled from 'styled-components'

export const FullContainer = styled.div`
  margin: auto;
  max-width: 95%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1441px){
    max-width: 90%;
  }
  
`

export const IconContainer = styled.div`
  margin: 20vh auto;
  padding: 1.5rem 1rem;
  width: 95vw;
  height: 50vh;


  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logotype{
    width: 70%;
    margin-bottom: 4rem;
  }

  @media(min-width: 1025px){
    .logotype{
      width: 40%;
    }
  }
`

export const UserFormContainer = styled.div`
  display: flex;
  align-items: center;

  input{
    margin-left: 0.5rem;
  }

  @media(min-width: 1025px){
    display: none;
  }
`

export const PhraseContainer = styled.div`
  display: none;

  @media(min-width: 1025px){
    display: flex;
    flex-direction: column;
    align-items: center;
  
    line-height: 1.8rem;
  
    p{
      color: #000;
      font-size: 1.2rem;
  
      span{
        color: #BE0F84;
        font-weight: 800;
      }
    }
  }
`

export const LoginContainer = styled.div`
  display: none;
  @media(min-width: 1025px){
    display: flex;
    flex-direction: column;
  }
`

export const UserLoginContainer = styled.div`
  padding: 1rem;  
  margin: 1rem;
  height: 50%;
  width: 20rem;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #e8eefa;

  .userInputContainer{
    margin: 2rem 0;

    display: flex;
    align-items: center;
  }

  span {
    margin-left: 1rem;
  }

  @media(min-width: 1200px){
    width: 25rem;
    height: 50%;
  }
`

export const UserLogonContainer = styled.div`
  padding: 1rem;  
  margin: 1rem;
  height: 50%;
  width: 20rem;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #e8eefa;

  span {
    margin-left: 1rem;
  }

  P{
    margin-bottom: 1rem;
  }

  a {
    color: #2463e0;
    font-weight: bold;
    text-decoration: underline;
  }

  @media(min-width: 1200px){
    width: 25rem;
    height: 50%;
  }


`
  