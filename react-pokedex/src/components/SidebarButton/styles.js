import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 2rem;
    width: 2rem;
    margin: 1rem;

    border: 0;
    background-color: transparent;


    .line1{
        width: 100%;
        
        background-color: #7ce55c;
        border: 3px solid #7ce55c;
        animation: slideForLeft1 3s ;

        @keyframes slideForLeft1 {
            from{
                transform: translateX(90%);
                opacity: 0;
            }

            to{
            opacity: 1;
            }
        }
    }

    .line2{
        width: 100%;
        
        background-color: #f9ce39;
        border: 3px solid #f9ce39;

        animation: slideForLeft2 3s ;

        @keyframes slideForLeft2 {
            from{
                transform: translateX(110%);
                opacity: 0;
            }

            to{
            opacity: 1;
            }
        }
    }
    

    .line3{
        width: 100%;
        
        background-color: #fe745e;
        border: 3px solid #fe745e;

        animation: slideForLeft3 3s ;

            @keyframes slideForLeft3 {
        from{
            transform: translateX(130%);
            opacity: 0;
        }

        to{
        opacity: 1;
        }

  }
    }
`