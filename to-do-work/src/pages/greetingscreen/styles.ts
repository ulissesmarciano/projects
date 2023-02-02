import styled, {css} from 'styled-components'
import { IGreetingScreenStyles } from './types'

import banner from '../../assets/background.jpg'


export const Container = styled.div<IGreetingScreenStyles>`
  color: ${props => props.theme.fontColor};
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  background-image: linear-gradient( #1e1e1e80, #1e1e1e 30%), url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  
    ${({variant}) => variant !== 'primary' && css`
      background-image: linear-gradient( #ffffff80, #ffffff 30%), url(${banner});
      background-color: red;
    `}

    .dimensionContainer{
      max-width: 76rem;
      margin: auto;
    }
`


export const StartContainer = styled.div<IGreetingScreenStyles>`
  @media(min-width: 769px){
      background-image: linear-gradient(to left, #1e1e1e60, #1e1e1e 70%, #1e1e1e 80%), url(${banner});
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      ${({variant}) => variant !== 'primary' && css`
        background-image: linear-gradient(to left, #ffffff60, #fff 70%, #fff 80%), url(${banner});
      `}
  }

`

export const GreetingContainer = styled.div<IGreetingScreenStyles>`
  
  h2 {
    margin: 3rem 2rem;
    font-size: 2rem;
    color: #f1d710;
    text-align: center;

    ${({variant}) => variant !== 'primary' && css`
      color: #01A0F0;
    `} 
    
    @media(min-width: 376px){
      font-size: 2.5rem;
      margin: 6rem 2rem 3rem;
    }
  }
  
  p {
    margin: 2rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;

    @media(min-width: 376px){
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin: 3rem 2rem;
    }
  }

  @media(min-width: 769px){
    max-width: 40rem;
    h2{
      text-align:left;
    }

    p{
      text-align:left;
    }
  }

`

export const ProjectDescriptionContainer = styled.div`
  background-color: ${props => props.theme.body};
  h4 {
    margin: 2rem;
    font-size: 1.8rem;
    text-align: center;
    
    
    @media(min-width: 376px){
      font-size: 2.5rem;
      margin: 6rem 2rem 3rem;
    }
  }
  
  p {
    margin: 2rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;

    @media(min-width: 376px){
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin: 3rem 2rem;
    }
  }
`

export const ButtonContainer = styled.div`
  margin: 1rem 1rem 4rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media(min-width: 769px){
    margin-left: 2rem;

    display: flex;
    justify-content: flex-start;
  }
`

export const ProjectsContainer = styled.div<IGreetingScreenStyles>`
  background-color: ${props => props.theme.body};
  gap: 2rem;
  padding: 0 2rem 2rem;

  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
      height: .2rem;
      background: transparent;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      border: solid 2px #FFF;
      ${({variant}) => variant !== 'primary' && css`
        border-radius: 1rem;
        border: solid 2px #1e1e1e;
      `}
  }

  @media (pointer:coarse)  {
    ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 1rem;
    }
  }

  @media (min-width: 1025px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

`
