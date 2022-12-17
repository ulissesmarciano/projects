import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const PokeContainer = styled.div`
    margin: .5rem ;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .2rem;


    background-color: #FFFFFF;

    @media (min-width: 481px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`