import styled from "styled-components";

export const PortableContainer = styled.div`
  width: 100%;
  @media (min-width: 1025px){
    display: flex;
    flex-direction: column;
    
    width: 50%;
  }
`

export const FullContainer = styled.div`
  margin: auto;
  max-width: 95%;

  display: flex;
  justify-content: center;

  .username {
    font-size: 11px;
    font-weight: 500;
  }
  
`