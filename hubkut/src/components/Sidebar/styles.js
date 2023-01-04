import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  padding: 0.5rem 1.5rem;

  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  

  display: flex;
  justify-content: flex-end;

  background-color: #308BC5;

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

  
`