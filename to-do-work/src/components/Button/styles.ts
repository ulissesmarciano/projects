import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.5rem 1.0rem;
  margin: 0.5rem;

  border: none;
  background: #88008c;
  border-radius: 2rem;

  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  
  &:hover{
    box-shadow: 0 0 25px #f36af7;
  }
  `

export const Border = styled.div`
  border: 2px solid #88008c;
  border-radius: 2rem;
  
`