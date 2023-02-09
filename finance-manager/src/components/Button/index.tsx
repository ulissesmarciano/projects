import { Link } from "react-router-dom"
import { IButton } from "./types"
import { Container } from "./styles"

const Button = ({to}:IButton) => {
  return (
    <Link to={to}>
      <Container>
        começar agora
      </Container>
    </Link>
  )
}

export default Button