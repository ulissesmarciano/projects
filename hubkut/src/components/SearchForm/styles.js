import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 1rem;
  height: 2rem;
  width: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #5579A1;
  border-radius: 50px;

  img{
    height: 1rem;
  }

  input{
    padding-left: 0.5rem;

    background-color: transparent;
    border: none;

    color: #FFF;

    ::placeholder{
      color: #FFFFFF90;
    }
  }
`