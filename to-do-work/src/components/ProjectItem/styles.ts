import styled, {css} from 'styled-components'
import { IProjectItemStyles } from './types'

export const Container = styled.div<IProjectItemStyles>`
  background-color: #0d0d0d;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style-position: inside;
    li{
      line-height: 1.8rem;

      font-size: 1.5rem;
    }
  }
  
  ${({variant}) => variant !== 'primary' && css`
    background-color: #fff;
  `}
`