import styled from "styled-components";

export const PortableContainer = styled.div``

export const FullContainer = styled.div`
  margin: auto;
  max-width: 95%;

  display: flex;
  justify-content: center;

  @media (min-width: 1201px){
    max-width: 150%;
  }
  
`