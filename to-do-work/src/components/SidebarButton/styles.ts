import styled, {css} from 'styled-components'
import { ISidebarStyles } from './types'

export const Container = styled.button<ISidebarStyles>`

  height: 1.5rem;
  width: 1.5rem;

  background-color: transparent;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div{
    width: 100%;

    border: 2px solid #fff;
    border-radius: 2px;
  }

  ${({variant}) => variant !== "primary" && css`
    div{
      width: 100%;

      border: 2px solid #000;
      border-radius: 2px;
    }
  `}
`