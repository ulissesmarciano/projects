import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: #F1CAD0;
    flex-grow: 1;
    margin: 2px;
    flex-basis: 0;

    border-radius: 4px;
`

export const PokemonName = styled.Text`
    margin: 10px;

    color: #c95467;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
`

export const PokemonImage = styled.Image`
    height: 70px;
    width: 70px;

    margin-bottom: 20px;
`

export const InfoView = styled.View`
    width: 180px;
    margin-bottom: 15px;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

`

export const TypesContainer = styled.View`
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const PokeId = styled.Text`
    font-weight: 500;
    color: #c95467;
`



