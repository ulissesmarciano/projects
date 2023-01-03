import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem auto 0;
  padding: 1.5rem 0;
  max-width: 768px;


  border-radius: 4px;
  background-color: #fff;

  h3 {
    margin: 0 0 1rem 1rem;
    font-size: 1rem;
  }

`

export const ButtonContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
        background: transparent;
  }
    
`