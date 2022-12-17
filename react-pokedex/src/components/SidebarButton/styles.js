import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 2rem;
    width: 2rem;
    margin: 1rem;

    border: 0;
    background-color: transparent;

    .line1{
        width: 100%;
        
        background-color: #7ce55c;
        border: 3px solid #7ce55c;
        border-radius: 1rem;
    }

    .line2{
        width: 100%;
        
        background-color: #f9ce39;
        border: 3px solid #f9ce39;
        border-radius: 1rem;
    }
    

    .line3{
        width: 100%;
        
        background-color: #fe745e;
        border: 3px solid #fe745e;
        border-radius: 1rem;
    }
`