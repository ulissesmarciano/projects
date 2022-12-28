import styled from 'styled-components/native';


export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 87px;

    background-color: #C01733;
`;

export const ButtonContainer = styled.View`
    padding: 14px;
    background-color: #CB2743;
    border-bottom-right-radius: 20px;
`

export const ButtonSearch = styled.TouchableOpacity`
    height: 60px;
    width: 60px;

    border-radius: 50px;
    border: 2px solid #FFF;
    background-color: #133366;

    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const SearchButtonImage = styled.Image`
    height: 25px;
    width: 25px;
`
export const SearchOrientation = styled.View`
    height: 100%;
    flex: 1;

    background-color: #CB2743;
`

export const SearchContainer = styled.View`
    height: 65%;

    background-color: #CB2743;

`

export const InputContainer = styled.View`
    padding-left: 4px;
    margin-top: 8px;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: #FFFFFF30;
`

export const Input = styled.TextInput`
    height: 100%;

    padding-left: 8px;
    

`

export const DisplayTop = styled.View`
    height: 35%;
    width: 100%;


    background-color: #C01733;
    border-top-left-radius: 20px;
`



