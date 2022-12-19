import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    
`

export const FirstSection = styled.div`
    height: 18rem;
    width: 100%;
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
    
    animation: slideDown 1s;
    
    @keyframes slideDown {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
           
    `

export const HeadContainer = styled.div`
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    svg{
        height: 2.5rem;
        width: auto;
        
        margin-left: -1rem;
        color: #fff;
    }
    
    
`

export const TitleContainer = styled.div`
    margin: 0.5rem 2rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
        font-size: 2rem;
        color: #FFFFFF;
        text-transform: capitalize;
    }
    
    p {
        font-size: 1.5rem;
        
        color: #FFFFFF;
        font-weight: 700;
    }
    
    
    @media(min-width: 700px){
        max-width: 700px;
        margin: auto;
    }
`
export const CurveSection = styled.div`
    svg{
        width: 100%;
        margin-top: 7.9rem;
        z-index: -1;


        &.normal {
                fill: #a6a877;
        }

        &.grass {
                fill: #77c850;
        }

        &.fire {
                fill: #ee7f30;
        }

        &.water {
                fill: #678fee;
        }

        &.electric {
            fill: #f7cf2e;
        }

        &.ice {
            fill: #98d5d7;
        }

        &.ground {
            fill: #dfbf69;
        }

        &.flying {
            fill: #a98ff0;
        }

        &.poison {
            fill: #a040a0;
        }

        &.fighting {
            fill: #bf3029;
        }

        &.psychic {
            fill: #f65687;
        }

        &.dark {
            fill: #725847;
        }

        &.rock {
            fill: #b8a137;
        }

        &.bug {
            fill: #a8b720;
        }

        &.ghost {
            fill: #6e5896;
        }

        &.steel {
            fill: #b9b7cf;
        }

        &.dragon {
            fill: #6f38f6;
        }

        &.fairy {
            fill: #f9aec7;
        }
    
    } 
        
`

export const ImageContainer = styled.div`
    margin-top: 25vh;
    align-self: center;

    position: absolute;

    img {
        height: 13rem;
        width: auto;
        z-index: 1;

       
    }
`


export const SecondSection = styled.div`
    width: 100%;
    height: 55%;
    
    margin-top: 6.5rem;
    
    animation: slideUp 1s;
    
    @keyframes slideUp {
        0% {
            transform: translateY(100%);
            opacity: 0.6;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const TypesContainer = styled.div`
    ul {
        margin-top: 4rem;

        display: flex;
        justify-content: space-around;

        list-style: none;
    }

    li {
            padding: 0.1rem 2rem;
            border-radius: 1rem;
            color: #FFFFFF;
            text-transform: capitalize;
            
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
        
    @media (min-width: 481px){
        padding: 0 5rem;
    }

`
export const SkillsContainer = styled.div`
    margin: 1rem;
    
    height: 79%;
`