import styled, {css} from 'styled-components'
import { ILinkItem } from './types'

export const Container = styled.a<ILinkItem>`
  color: #DDD;
  font-size: 0.9rem;

  :hover{
    color: #FFF;
  }

  
  ${({variant}) => variant !== "primary" && css`
  color: #FFF;
  font-size: 0.9rem;
  font-weight: 700;
  `}
`