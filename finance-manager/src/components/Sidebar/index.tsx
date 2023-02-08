import HideSidebarButton from "../SidebarButton/HideSidebarButton"
import { Container } from "./styles"
import { ISidebar } from "./types"

const Sidebar = ({active}:ISidebar) => {
  const closeSidebar = () => {
    active(false)
  }
  return (
    <Container sidebar={active}>
      <HideSidebarButton onClick={closeSidebar}/>
    </Container>
  )
}

export default Sidebar