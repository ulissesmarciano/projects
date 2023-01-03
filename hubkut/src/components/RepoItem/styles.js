import styled from 'styled-components'

export const ItemContainer = styled.a`
  margin: 1px;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #D9E6F6;
  
`

export const TitleContainer = styled.div`
    img{
      height: 1rem;
      margin-right: 0.1rem;
    }
    
  div{
    display: flex;
    align-items: center;

  }
  
  h3{
    color: #308BC5;
    font-size: 1rem;
  }

  h4{
    color: #888;
    font-size: 0.8rem;
  }

`

export const StarContainer = styled.div`
  width: 5rem;
  margin: 0.5rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 8px;
  background-color: #6F92BB;

  img{
      height: 1rem;
      margin-right: 0.1rem;
  }

  p {
    color: #fff;
  }
`