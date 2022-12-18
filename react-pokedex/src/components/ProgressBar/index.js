import React from 'react'

import {Container, ParentDiv, ProgressDiv} from './styles'

const ProgressBar = ({progress}) => {
  return (
    <Container>
      <ParentDiv>
        <ProgressDiv style={{width:`${progress}%`, background: `${progress < 50 ? "red" : "green"}`}}/>
      </ParentDiv>
    </Container>
  )
}

export { ProgressBar }