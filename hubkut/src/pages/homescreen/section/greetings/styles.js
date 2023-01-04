import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem auto 0;
  padding: 1.5rem 1rem;
  width: 95vw;


  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  @media(min-width: 1025px){
    width: 50vw;
  }

  
`

export const GreetingContainer = styled.div`
  h2{
    margin-bottom: 0.5rem;

    font-size: 1.2rem;
  }

  p{
    margin-bottom: 1rem;

    font-size: 0.7rem;
    color: #999;
  }

  @media(min-width: 1201px){
   h2{
    margin-bottom: 0.8rem;

    font-size: 1.5rem;
   }

   p{
    margin-bottom: 1.2rem;

    font-size: 1rem;
    color: #999;
   }
  }
`

export const InfoDataContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 0.6rem;
    font-style: italic;
    color: #999;
    margin-bottom: 0.5rem;
  }

  @media(min-width: 1201px){
    display: flex;
    justify-content: flex-start;
  }

`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1201px){
    margin-right: 2rem;
  }

`

export const ItemCountContainer = styled.div`
  display: flex;
  align-items: center;

  img{
    height: 1rem;
    margin-right: 0.1rem;
  }

  p {
    color: #308BC5;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: 500;
  }

  
`