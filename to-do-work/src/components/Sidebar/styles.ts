import styled from 'styled-components'
import { ISidebarStyled } from './types'

export const Container = styled.div<ISidebarStyled>`
  background-color: ${props => props.theme.body};
  position: absolute;
  padding: 0.8rem 0.3rem;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  right: ${props => props.sidebar ? '0' : '100%'};
  animation: showSidebar .4s;
  @keyframes showSidebar {
    from{
      opacity: 0;
      width: 0;
    }
    
    to{
      opacity: 1;
      width: 100%;
    }
  }
  
`

export const HeadContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`

export const MenuContainer = styled.div`
  padding: 2rem;
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .line {
    width: 100%;
    border-top: 3px solid #252525;
    border-bottom: 3px solid #fff;
  }
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`