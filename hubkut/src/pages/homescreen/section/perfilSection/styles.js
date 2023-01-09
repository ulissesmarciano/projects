import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (min-width: 1025px){
    height: 40rem;
    width: 14rem;
    margin: 1rem 0.5rem;
    padding: 1.5rem 0;

    display: flex;
    flex-direction: column;
    word-break: normal;


    border-radius: 4px;
    background-color: #fff;
    display: flex;

    .avatar {
      height: 10rem;
      width: 10rem;
      margin: 0 auto 1rem;

      border-radius: 50rem;
    }

    hr {
      height: 1px;
      width: 90%;
      margin: 0 auto 0.5rem;

      background-color: #CCC;
      border: none;
    }

    h2{
      margin: 0 0 0.5rem 0.5rem;

      color: #308BC5;
      font-size: 1.2rem;
    }

    p {
      color: #AAA;
      font-weight: 500;
      margin: 0 0 0.5rem 0.5rem;
    }
  }

`

export const InfoContainer = styled.div`
  display: none;

  @media (min-width: 1025px){
    display: flex;
    flex-direction: column;
  }


`