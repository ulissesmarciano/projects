import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem auto 0;
  padding: 1.5rem 1rem;
  min-width: 90%;


  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  .titletext {
    margin-bottom: 0.5rem;
  }

  .biotext{
    margin-bottom: 1rem;

    font-size: 0.7rem;
    color: #999;
  }
  
  @media(min-width: 1025px){
    .linkSection {
        margin:1rem 0.5rem 0;
      
            color: #3096D3;
            font-size: 1rem;
            font-weight: 800;
      }
      width: 50vw;
  }
    
  @media(min-width: 1201px){
    .biotext{
      margin-bottom: 1.2rem;
      
      font-size: 1rem;
      color: #999;
    }
  }
    
    
`
