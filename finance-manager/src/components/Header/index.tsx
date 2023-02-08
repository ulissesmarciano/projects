import { Container, ImageContainer } from './styles'

import Logo from '../../assets/logo.png'
import ShowSidebarButton from '../SidebarButton/ShowSidebarButton'
import { useState } from 'react'
import Sidebar from '../Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <ImageContainer>
        <img src={Logo} alt="" />
      </ImageContainer>
      <div>
        <ShowSidebarButton onClick={openSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}
      </div>
    </Container>
  )
}

export default Header