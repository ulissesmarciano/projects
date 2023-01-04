import styled, {css} from 'styled-components'

export const ButtonContainer = styled.a`
  height: 2.5rem;
  max-width: 10rem;
  padding: 0.5rem;

  border-radius: 10px;
  background-color: #6F92BB;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p{
    color: #fff;
    font-size: 0.8rem;
    
  }

  ${({variant}) => variant !== "primary" && css`
    margin-left: 1rem;
    padding: 0.5rem;

    border-radius: 10px;
    background-color: #D9E6F6;

    p{
      color: #308BC5;
    }
  `}
`