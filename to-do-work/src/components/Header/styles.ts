import styled from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.fontColor};

  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageContainer = styled.div`
  img{
    height: 2.5rem;
  }
`