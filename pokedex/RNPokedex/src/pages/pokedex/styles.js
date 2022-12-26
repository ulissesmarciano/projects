import styled from "styled-components/native";

export const CardEmpty = styled.View`
    align-items: center;
    background-color: transparent;
    flex-grow: 1;
    margin: 2px;
    flex-basis: 0;
`

export const Pokelist = styled.View`
    display: flex;
`

export const Type = styled.Text`
    padding: 1px 6px;
    margin: 2px;

    display: flex;
    justify-content: center;
    
    color: #fff;
    font-weight: 700;
    border-radius: 10px;
    text-transform: capitalize;
`