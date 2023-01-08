import styled from "styled-components";

export const PortableContainer = styled.div``

export const FullContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1025px){
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1201px){
    max-width: 150%;
  }
  
`