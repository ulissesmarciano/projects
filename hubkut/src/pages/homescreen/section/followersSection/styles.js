import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (min-width: 1025px){
    width: 20rem;
    margin: 1rem 0.5rem;
    padding: 1.5rem;


    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    //justify-content: center;

    ul {
      list-style: none;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;


      div {
        width:80px;
        height: 100px;
        
        display: flex;
        justify-content: center;
        align-items: flex-end;
        
        background: linear-gradient(0deg, #00000090, #00000000);
        border-radius: 6px;

          p{
            margin-bottom: 0.3rem;

            color: #fff;
            font-size: 0.8rem;
          }
      }
    }

    a {
      h5{
        margin:1rem 0.5rem 0;
  
        color: #3096D3;
        font-size: 1rem;
        font-weight: 800;
      }
    }
  }
`

export const TitleContainer = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  p{
    margin-left: 0.5rem;

    color: #3096D3;
    font-size: 1rem;
    font-weight: 800;
  }
`