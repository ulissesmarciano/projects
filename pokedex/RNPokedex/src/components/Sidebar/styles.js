import styled from "styled-components/native"

export const SidebarContainer = styled.View`
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 1000%;

    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #C01733;
`

export const OptionsContainer = styled.View`
    height: 65%;
    width: 80%;

    margin-top: -150px;

    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const Title = styled.Text`
    margin-bottom: 40px;

    color: #FFF;
    font-size: 22px;
    font-weight: 700;
`

export const Link = styled.TouchableOpacity`
    flex-grow: 1;
    margin: 2px;
    flex-basis: 0;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #CB2743;
`

export const LinkText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
`