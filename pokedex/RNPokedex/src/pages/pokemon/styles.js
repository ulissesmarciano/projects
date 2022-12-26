import styled from "styled-components/native";

export const Container = styled.View`
    
`

export const PokeNameContainer = styled.View`
    margin: 75px 45px 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const FirstSection = styled.View`
    //height: 450px;
`
export const PokeName = styled.Text`
    font-size: 28px;
    color: #fff;
    font-weight: 600;
    text-transform: capitalize;
`

export const PokeId = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: 600;
`

export const PokemonImageContainer = styled.View`
    display: flex;
    align-items: center;
`

export const PokemonImage = styled.Image`
    height: 230px;
    width: 230px;
`
export const TypesContainer = styled.View`
    margin: 20px 45px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Type = styled.Text`
    padding: 4px 30px;

    color: #fff;
    font-weight: 700;

    border-radius: 20px;
`

export const SecondSection = styled.View`
    height: 370px;

    margin: 0 30px;
`