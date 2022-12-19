import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: space-between;

    height: 2rem;
    width: 2rem;
    margin: 1rem;

    border: 0;
    background-color: transparent;


    
    .line1{
        top: 1rem;
        right: 1.8rem;
        position: absolute;
        height: 33px;
        
        border: 4px solid #7ce55c;

        overflow: hidden;
        -webkit-transform: skew(40deg);
            -ms-transform: skew(40deg);
                transform: skew(40deg);
        

        animation: crossFade 1s;
        @keyframes crossFade {
            from{
                -webkit-transform: skew(-10deg);
                -ms-transform: skew(-10deg);
                    transform: skew(-10deg);
            }

            to{
                -webkit-transform: skew(40deg);
                -ms-transform: skew(40deg);
                    transform: skew(40deg);
            }

        }
    }
    
    .line2{
        top: 1rem;
        right: 1.8rem;
        position: absolute;
        height: 33px;
        margin-left: -10rem;
        
        border: 4px solid #f9ce39;

        overflow: hidden;
        -webkit-transform: skew(-40deg);
            -ms-transform: skew(-40deg);
                transform: skew(-40deg);
            
        animation: crossFade2 1s;
        @keyframes crossFade2 {
            from{
                -webkit-transform: skew(10deg);
                -ms-transform: skew(10deg);
                    transform: skew(10deg);
            }

            to{
                -webkit-transform: skew(-40deg);
                -ms-transform: skew(-40deg);
                    transform: skew(-40deg);
            }
        }
    }

    
`