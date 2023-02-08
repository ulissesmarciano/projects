import { Container, ImageContainer } from './styles'

import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={Logo} alt="" />
      </ImageContainer>
    </Container>
  )
}

export default Header