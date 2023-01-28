import styled from 'styled-components'

export const Container = styled.label`
    width: 3rem;
    height: 1.5rem;
    padding: 0.2rem;
    position: relative;
    
    border-radius: 1rem;
    background: #4e4e4e;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;


    input {
      display: none;
    }

    span {
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 1rem;
      background: #fff;
      left: 8%;

      box-shadow: 2px 2px 4px black;
      transition: 0.1s;
    }

    input:checked + span {
      left: 52%
    }

    p{
      font-size: 0.8rem;
      margin-right: 3px;
      margin-bottom: 3px;
    }
`