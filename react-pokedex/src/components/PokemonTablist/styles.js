import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const Container = styled.div`
    height: 100%;


`

export const WrapperTabs = styled(Tabs)`
    height: 100%;
    

`

export const WrapperTabList = styled(TabList)`
    padding: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;


    span {
        height: 2.5rem;
        border: 1px solid #999999;
    }

    @media (min-width: 481px){
        padding: 1rem 4rem;
    }
`
export const WrapperTab = styled(Tab)`
    list-style: none;
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

export const BaseStatsContainer = styled.div`
    
`