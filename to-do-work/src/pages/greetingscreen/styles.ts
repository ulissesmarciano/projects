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
    `} 
`

export const GreetingContainer = styled.div<IGreetingScreenStyles>`
  h2 {
    margin: 3rem 2rem;
    font-size: 2rem;
    color: #f1d710;
    text-align: center;

    ${({variant}) => variant !== 'primary' && css`
      color: blue;
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

`

export const ProjectDescriptionContainer = styled.div`
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
`

export const ProjectsContainer = styled.div<IGreetingScreenStyles>`
  margin: 0 2rem;
  gap: 2rem;
  
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

  @media (min-width: 1200px){
      margin: 0 0 0 -2rem;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      overflow-y: hidden;
  }
`
