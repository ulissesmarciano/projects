import styled, {css} from 'styled-components'

export const Container = styled.a`
  color: #DDD;
  font-size: 0.9rem;

  
  ${({variant}) => variant !== "primary" && css`
  color: #FFF;
  font-size: 0.9rem;
  font-weight: 700;
  `}
`