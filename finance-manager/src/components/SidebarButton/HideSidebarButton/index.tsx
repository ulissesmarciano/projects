import { Container } from "./styles"
import { IHideSidebarButton } from "./types"

const HideSidebarButton = ({onClick}:IHideSidebarButton) => {
  return (
    <Container onClick={onClick}>x</Container>
  )
}

export default HideSidebarButton