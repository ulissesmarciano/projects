import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  height: 100vh;
  max-width: 80%;
  
  display: flex;
  flex-direction: column;

  background-color: #FFF;
  
  .backLink {
    margin-bottom: 1rem;

    display: flex;
    justify-content: flex-end;
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