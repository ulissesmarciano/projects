import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;

  display: flex;
  align-items: center;

  color: #000;
`

export const AvatarContainer = styled.div`

  img {
    height: 6rem;
    margin-right: 0.8rem;

    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const TitleContainer = styled.div`

  display: flex;
  flex-direction: column;

  h3{
    margin-bottom: 0.5rem;

    color: #3096D3;
    font-size: 1rem;
  }

  p {
    color: #a0a0a0;
    font-size: 0.8rem;
  }
`

export const EmployContainer = styled.div`

  display: flex;
  justify-content: flex-start;

  div{
    margin-bottom: 0.2rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;

    img{
      height: 1.2rem;
    }

    p{
      margin-left: 0.2rem;

      color: #999;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`