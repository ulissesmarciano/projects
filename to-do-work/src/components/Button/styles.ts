import styled, {css} from 'styled-components'
import { IButtonStyles } from './types'

export const Container = styled.button<IButtonStyles>`
  padding: 0.5rem 1.0rem;
  margin: 0.5rem;

  border: none;
  background: #88008c;
  border-radius: 2rem;

  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  
  &:hover{
    box-shadow: 0 0 25px #f36af7;
  }

  ${({variant}) => variant === 'secondary' && css`

    background: transparent;
    border: 2px solid #88008c;

    font-weight: 400;
    color: ${props => props.theme.fontColor};

    &:hover{
    box-shadow: none;
    }
  `}

  ${({variant}) => variant === 'third' && css`

    background: #88008c;

    font-weight: 400;

    &:hover{
    box-shadow: none;
    }

  `}

  ${({variant}) => variant === 'forth' && css`
    padding: 0.2rem 1.5rem;
    background: #858585;

    font-weight: 400;

    &:hover{
    box-shadow: none;
    }

  `}
`

export const Border = styled.div<IButtonStyles>`
  border: 2px solid #88008c;
  border-radius: 2rem;
  
  ${({variant}) => variant === 'secondary' && css`
    border: none;
  `}

  ${({variant}) => variant === 'third' && css`
    border: none;
  `}

  ${({variant}) => variant === 'forth' && css`
    border: none;
  `}
`