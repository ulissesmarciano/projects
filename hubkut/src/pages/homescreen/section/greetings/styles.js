import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem auto 0;
  padding: 1.5rem 1rem;
  max-width: 1000px;



  background-color: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
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

`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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