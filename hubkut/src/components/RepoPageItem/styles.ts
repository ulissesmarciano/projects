import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;

  color: #000;
`

export const InfoContainer = styled.div`

  display: flex;
  flex-direction: column;

  h3{
    margin-bottom: 0.5rem;

    color: #3096D3;
    font-size: 1rem;
  }

  p{
    margin-bottom: 1rem;

    font-size: 0.8rem;
  }

  ul {
    list-style: none;

    display: flex;
    li{
      margin-right: 1rem;

      font-size: 0.8rem;
    }
  }
`