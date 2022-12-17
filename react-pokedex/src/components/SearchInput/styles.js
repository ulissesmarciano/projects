import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    padding-left: .5rem;
    
    border-radius: .3rem;
    border: 2px solid rgba(255, 255, 255, 0.6);
    background-color: #cc455c;

    display: flex;
    align-items: center;
`

export const SearchInputItem = styled.input`
    width: 100%;
    height: 2rem;
    padding-left: .5rem;
    
    color: #FFFFFF;
    border: 0;
    background-color: transparent;

    &::placeholder {
    color: #FFFFFF;
    opacity: .6;
    font-weight: 400;
    }
    
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;

    svg {
        height: 1.2rem;
        width: 1.2rem;
        color: white;
        opacity: 0.6;
    }
`