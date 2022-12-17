import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    padding: 0.5rem;

    background-color: #F1CAD0;

    @media (min-width: 798px){
        max-width: 16rem;
        max-height: 16rem;
    } 
    `
export const TitleContainer = styled.div`

    display: flex;
    justify-content: center;

    h3 {
        margin: 0.5rem;
        color: #c95467;
        font-weight: 400;
        font-size: 1.25rem;
        text-transform: capitalize;
    }
`





export const ImageContainer = styled.div`
    margin: auto;
    margin-bottom: 1rem;
    width: 7rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 5rem;
        width: 5rem;
    }
 `

export const InfoContainer = styled.div`
    

    display: flex;
    justify-content: space-between;

`

export const TypesContainer = styled.div`
    width: 100%;
    display: flex;

    ul{
        width: 100%;
        list-style: none;
        

        display: flex;
        justify-content: space-around;


        li {
        padding: .2rem .3rem;
        border-radius: .5rem;
        
        font-size: .8rem;
        color: #FFF;

        &.normal {
            background-color: #a6a877;
        }

        &.grass {
            background-color: #77c850;
        }

        &.fire {
            background-color: #ee7f30;
        }

        &.water {
            background-color: #678fee;
        }

        &.electric {
            background-color: #f7cf2e;
        }

        &.ice {
            background-color: #98d5d7;
        }

        &.ground {
            background-color: #dfbf69;
        }

        &.flying {
            background-color: #a98ff0;
        }

        &.poison {
            background-color: #a040a0;
        }

        &.fighting {
            background-color: #bf3029;
        }

        &.psychic {
            background-color: #f65687;
        }

        &.dark {
            background-color: #725847;
        }

        &.rock {
            background-color: #b8a137;
        }

        &.bug {
            background-color: #a8b720;
        }

        &.ghost {
            background-color: #6e5896;
        }

        &.steel {
            background-color: #b9b7cf;
        }

        &.dragon {
            background-color: #6f38f6;
        }

        &.fairy {
            background-color: #f9aec7;
        }
    }

    }
`

export const IdContainer = styled.div`
    p {
        color: #c95467;
    }
`

