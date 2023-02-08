import styled from 'styled-components'
import { ISidebarStyled } from './types'


export const Container = styled.div<ISidebarStyled>`
  position: absolute;
  padding: 0.5rem 1.5rem;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  
  display: flex;
  justify-content: flex-end;
  background-color: #FBF7F4;
  box-shadow: 0 20px 200px #000;

  right: ${props => props.sidebar ? '0' : '100%'};
  animation: showSidebar .4s;
  @keyframes showSidebar {
    from{
      opacity: 0;
      width: 0;
    }
    
    to{
      opacity: 1;
      width: 50%;
    }
  }
  
`