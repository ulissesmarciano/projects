import React from 'react'
import { Container } from './styles'

import LoaderSVG from '../../assets/loader/loader.svg'

const Loader = () => {
  return (
    <Container>
      <img src={LoaderSVG} alt='carregando' />
    </Container>
  )
}

export default Loader