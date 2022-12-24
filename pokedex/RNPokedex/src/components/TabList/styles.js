import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`

export const TabContainer = styled.View`
margin-bottom: 15px;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export const TabName = styled.Text`

    font-size: 18px;
    font-weight: 500;

`
export const SkillsContainer = styled.View`
    width: 80%;
`

export const LineSkill = styled.View`
    margin-top: 15px;
    margin-bottom: 25px;


    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SkillTitle = styled.Text`
    margin-right: 15px;

    font-size: 18px;
    font-weight: 800;
    color: #999;
    line-height: 35px;
`


export const SkillContent = styled.Text`
    width: 100%;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 35px;

    display: flex;
    justify-content: center;

`

export const Icons = styled.Image`
    height: 16px;
    width: 16px;
`

export const Subtitle = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: #000;
`

export const MovesScreenContent = styled.View`
    align-items: center;
    padding: 8px;

    background-color: #ddd;
    flex-grow: 1;
    margin: 2px;
    flex-basis: 0;

    border-radius: 4px;
`

export const MoveEmpty = styled.View`
    align-items: center;
    background-color: transparent;
    flex-grow: 1;
    margin: 2px;
    flex-basis: 0;
`


