import styled from 'styled-components'
import capa from '../../assets/capa2.jpg'

export const Container = styled.div`

  display: flex;
  flex-direction: column;
`

export const GreetingContainer = styled.div`
  padding: 2rem 0 5rem;

  color: #fff;
  background: linear-gradient(#f2be90 0 80%, #f4e1d3);

  .title{
    margin-bottom: 1rem;

    span{
      font-size: 1.75rem;
      font-weight: 700;

      background: linear-gradient(to right, #000, #999  );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    text-align: center;
    font-size: 2rem;
  }

  .subtitle{
    text-align: center;
    font-size: 1.2rem;
  }


  /* background-image: linear-gradient(#000, transparent), url(${capa});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; */
  
`

export const ButtonContainer = styled.div`
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
`

export const AttributesTextContainer = styled.div`

  h4{
    margin-bottom: 1rem;

    text-align: center;
    font-size: 1.5rem;

    span{
      font-size: 1.5rem;
      font-weight: 700;

      background: linear-gradient(to right, #000, #999  );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p{
    text-align: center;
    font-size: 1.2rem;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AttributesContainer = styled.div`
    
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
      height: .5rem;
      width: 3rem;
      background: transparent;
  }

::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 1rem;
}

`