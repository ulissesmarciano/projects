import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem auto 0;
  padding: 1.5rem 1rem;
  width: 100%;


  border-radius: 4px;
  background-color: #fff;

  h3 {
    margin: 0 1rem 1rem;
    font-size: 1rem;
  }

`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media(min-width: 1201px){
    margin-right: 2rem;
  }
`