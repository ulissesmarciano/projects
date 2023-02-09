import { GrClose } from 'react-icons/gr'
import { Container } from "./styles"
import { IHideSidebarButton } from "./types"

const HideSidebarButton = ({onClick}:IHideSidebarButton) => {
  return (
    <Container onClick={onClick}>
      <GrClose/>
    </Container>
  )
}

export default HideSidebarButton