import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.6rem;


  font-size: 1rem;
  color: #FFF;
  font-weight: bold;
  text-transform: uppercase;
 
  background-color: #333;
  border-radius: 2rem;

  :hover {
    transform: translateY(-2px);
    transition: 0.1s;
    box-shadow: 2px 4px 2px 2px  #00000030;

  }

  :active {
    transform: translateY(5px);
    box-shadow: none;
  }

`