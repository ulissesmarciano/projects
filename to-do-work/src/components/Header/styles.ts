import styled, {css} from 'styled-components'
import { IHeaderStyles } from './types'

export const Container = styled.div<IHeaderStyles>`
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #252525;
  border-bottom: 2px solid #c2c2c2;

  ${({variant}) => variant !== 'primary' && css`
    background-color: #fff;
  `}
`

export const LogoContainer = styled.div`
  img{
    height: 2.5rem;
  }
`

export const SidebarContainer = styled.div`
  @media(min-width: 1025px){
    display: none;
  }
`

export const LinkContainer = styled.div`
  display: none;

  @media(min-width: 1025px){
    width: 100%;
    gap: 2rem;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
export const ButtonContainer = styled.div`
    display: none;
@media(min-width: 1025px){
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
`