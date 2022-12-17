import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;

    background-color: #F1CAD0;

    @media (min-width: 798px){
        max-width: 18rem;
        max-height: 18rem;
    }
`

export const TitleContainer = styled.div`
    margin: .5rem;

    display: flex;
    justify-content: center;

    h3 {
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
    margin: .5rem;


    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: .7rem;

`

export const TypesContainer = styled.div`
    ul{
        list-style: none;

        display: flex;

        li {
        margin: 0 .2rem;
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

