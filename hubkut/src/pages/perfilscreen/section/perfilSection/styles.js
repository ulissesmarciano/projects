import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  
  display: flex;
  justify-content: flex-start;

  background-color: #fff;
  border-radius: 4px;

  .titleAndDescritpionContainer{
    margin-left: 3rem;
    margin-right: 5rem;
    h2{
      color: #308BC5;
      font-size: 1rem;
    }

    p{
      font-size: 0.8rem;
    }

  }

  .avatar {
    height: 7rem;
    width: 7rem;

    border-radius: 50rem;
  }

  hr {
    display: none;
  }

  @media (min-width: 375px){
    .titleAndDescritpionContainer{
    margin-left: 3rem;
    margin-right: 5rem;
    h2{
      color: #308BC5;
      font-size: 1.5rem;
    }

    p{
      font-size: 1rem;
    }

  }
  }

  @media (min-width: 1025px){
    height: 40rem;
    width: 14rem;
    margin: 1rem 0.5rem;
    padding: 1.5rem 0;

    display: flex;
    flex-direction: column;
    word-break: break-all;


    border-radius: 4px;
    display: flex;

    .avatar {
      height: 10rem;
      width: 10rem;
      margin: 0 auto 1rem;

      border-radius: 50rem;
    }

    hr {
      display: flex;

      height: 1px;
      width: 90%;
      margin: 0 auto 0.5rem;

      background-color: #CCC;
      border: none;
    }

    .titleAndDescritpionContainer{
      margin: 0;

      h2{
        margin: 0 0 0.5rem 0.5rem;
        font-size: 1.2rem;
      }
  
      p {
        color: #AAA;
        font-weight: 500;
        margin: 0 0 0.5rem 0.5rem;
      }

    }


  }

`

export const InfoContainer = styled.div`
  display: none;
  @media (min-width: 700px){
    display: flex;
    flex-direction: column;
  }

`