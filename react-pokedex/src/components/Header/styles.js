import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex: 1;
    
    background-color: #C01733;
    `

export const ButtonContainer = styled.div`
    border-bottom-right-radius: 1rem;
    
    background-color: #CB2743;
    
    `
    export const ButtonSearch = styled.button`
        height: 4rem;
        width: 4rem;
        margin: 1rem;
    
        border-radius: 50px;
        border: 3px solid #ffffff;
        background-color: #133366;


        display: flex;
        justify-content: center;
        align-items: center;

        img{
            height: 2rem;
            width: auto;


            animation: bright 1s alternate infinite;

            @keyframes bright {
                0% {
                    opacity: 0.8;
                }
                100% {
                    opacity: 1;
                    filter: drop-shadow(1px 1px 15px rgba(255, 255, 255, .5))
            }
            }
        }
    
    `

export const CenterContainer = styled.div`

    flex: 1;

    background-color: #CB2743;

`

export const SearchFormContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70%;
    width: 100%;
    
`

export const DisplayTop = styled.div`
    height: 30%;
    width: 100%;

    border-top-left-radius: 1rem;

    background-color: #C01733;


`