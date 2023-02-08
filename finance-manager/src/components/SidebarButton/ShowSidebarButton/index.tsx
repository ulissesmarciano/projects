import { Container } from "./styles"
import { IShowSidebarButton } from "./types"

const ShowSidebarButton = ({onClick}:IShowSidebarButton) => {
  return (
    <Container onClick={onClick}>
      <div />
      <div />
      <div />
    </Container>
  )
}

export default ShowSidebarButton