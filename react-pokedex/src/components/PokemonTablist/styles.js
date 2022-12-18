import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Container = styled.div`
    height: 100%;


`

export const WrapperTabs = styled(Tabs)`
    height: 100%;
    
    animation: showsize 1s ease-in-out;

            @keyframes showsize {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                
            }
`

export const WrapperTabList = styled(TabList)`
    padding: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 481px){
        padding: 1rem 4rem;
    }
`
export const WrapperTab = styled(Tab)`
    list-style: none;
    padding: 3% 8%;

    border-radius: 1rem 1rem 0 0;
    border-bottom: none;

    font-weight: bolder;

    

    transition: 500ms;
    &:hover{
        transition: all 0.5s;
        cursor: pointer;
        -webkit-transform: translateY(-4%);
        transform: translateY(-4%);
        box-shadow: rgb(0 0 0 / 20%) 0px -15px 1rem;
    }

    &:focus{
        transition: all 0.5s;
        cursor: pointer;
        -webkit-transform: translateY(-4%);
        transform: translateY(-4%);
        box-shadow: rgb(0 0 0 / 20%) 0px -15px 1rem;
    }
`

export const DescriptionContainer = styled.div`
    height: 81%;
    
    
`

export const WrapperTabPanel = styled(TabPanel)`
    span {
        text-transform: capitalize;
    }

    li{
        text-transform: capitalize;
    }

`

export const AboutContainer = styled.div`
    margin: 0 2rem;
    padding: 0 2em;
    
    display: flex;
    flex-direction: column;

    h2{
        margin: 0 0 1rem -.5rem;
        font-size: 1.5rem;
    }

    @media(min-width: 540px){
        margin: 0 4rem;
        padding: 0 4rem;
    }

    @media(min-width: 768px){
        margin: 0 8rem;
        padding: 0 4rem;
    }
    animation: showsize 1s ease-in-out;

            @keyframes showsize {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                
            }

`

export const AboutItem = styled.ul`
    

    li {
        color: #999;

        display: flex;

        p {
            color: #000;
            margin-left: 1rem;
        }

        span {
            margin-left: 0.5rem;
            p{
                color: #000;
            }
            @media(min-width: 768px){
            font-size: 1.25rem;
            font-weight: 500;
            }
        }
        
        div {
            display: flex;
            margin-left: 1rem;
            span {
                display: flex;
                
                img {
                  height: 1rem;
                  margin-top: .2rem;
                  margin-right: -.8rem;
                }
            }
        }
        @media(min-width: 768px){
        font-size: 1.25rem;
        font-weight: 600;
        }
    }
    
`

export const BStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const BSItem = styled.ul`
    margin-right: 1rem;

    list-style: none;
    line-height: 1.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: #999999;


    li{
        display: flex;
        justify-content: space-between;


        span{
            display: flex;
            
            width: 100%;
            max-width: 80%;
        }

        p {
            color: #000;
            text-align: start;
            
        }
    }
    animation: showsize 1s ease-in-out;

            @keyframes showsize {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                
            }
`
export const TotalContainer = styled.div`

    max-width: 20rem;

   
`

export const MovesContainer = styled.div`
    margin: 1rem;
    height: 100%;

    ul {
        list-style: none;
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .2rem;
        
        li {
            font-size: 1rem;
            line-height: 1.5rem;
            text-align: center;

            margin-right: 1rem;
            margin-bottom: 1.7rem;
            position: relative;
            transition: box-shadow 0.3s ease-out;
            &:hover{
            position: relative;
            box-shadow: #000 0px -1.5rem 0px inset;
            transition: box-shadow 0.3s ease-out;
            color: #FFF;
            
            }
            
        }

        @media (min-width: 481px){
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (min-width: 680px){
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

    }
    animation: showsize 1s ease-in-out;

            @keyframes showsize {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                
            }    

`
