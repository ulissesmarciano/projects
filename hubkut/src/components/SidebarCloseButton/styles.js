import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 1.8rem;
  height: 1.3rem;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  
  div{
    width: 100%;
    border: 1.5px solid red;
    background-color: red;
    border-radius: 2px;
  }
`