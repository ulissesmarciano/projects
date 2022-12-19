import styled from 'styled-components';

export const Container = styled.div`
  background-color: #CB2743;
  display: flex;
  flex-direction: column;
  
  
  position: fixed;
  top: 0;
  right: 0;
  
  height: 100%;
  width: 100%;
  z-index: 10;
  right: ${props => props.sidebar ? '0' : '100%'};
  animation: showSidebar .4s;
  
  
  
  @keyframes showSidebar {
    from{
      opacity: 0;
      width: 0;
    }
    
    to{
      opacity: 1;
      width: 100%;
    }
  }
  
`;

export const ButtonCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 62.5rem;
  width: 100%;
  margin: auto;
  
  animation: fadeIn 3s;

  @keyframes fadeIn {
    from{
      opacity: 0;
    }

    to{
      opacity: 1;
    }

  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h2{
    color: #FFF;
  }

`



