import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
  height: 100vh;
  
  
  display: flex;
  flex-direction: column;

  background-color: #FFF;
  
  .backLink {
    margin-bottom: 1rem;

    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 1440px){
    max-width: 80%;
    margin: 1rem auto;
  }
`

export const RepositorieContainer = styled.ul`
  margin-bottom: 1rem;


  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;

  list-style: none;

  li {
    background-color: #EFEFEF;
  }

  @media (min-width: 769px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1025px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`