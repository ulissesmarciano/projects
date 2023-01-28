import styled, {css} from 'styled-components'
import { ISidebarCloseButtonStyles } from './types'

export const ButtonContainer = styled.button<ISidebarCloseButtonStyles>`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  
  
  svg{
    height: 2.5rem;
    width: 2.5rem;
    filter: invert(100%);
  }

  ${({variant}) => variant !== 'primary' && css`
    svg {
      filter: none;
      fill: red;
    }
  `}
`