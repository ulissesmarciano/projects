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

export const ImageContainer = styled.div`
  img{
    height: 2.5rem;
  }
`