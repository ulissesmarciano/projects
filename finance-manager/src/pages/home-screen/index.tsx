import Attributes from "../../components/Attributes"
import Button from "../../components/Button"
import Header from "../../components/Header"
import { Container, GreetingContainer, ButtonContainer, AttributesTextContainer, AttributesContainer } from "./styles"

const HomeScreen = () => {
  return (
    <Container>
      <Header/>
      <GreetingContainer>
        <p className="title"><span>Organize</span><br/> sua vida financeira</p>
        <p className="subtitle">Crie tarefas para oranizar sua vida financeira com uma ferramenta que ajudará em sua organzação e se tornará o melhor amigo da sua vida cotidiana.</p>
      </GreetingContainer>
      <ButtonContainer>
        <Button to="/logon"/>
      </ButtonContainer>
      <AttributesTextContainer>
        <h4>Explore nossos <br/><span>serviços</span></h4>
        <p>Utilizando nossa ferramenta você pode organizar gastos simples para que seu planejamento não fuja do seu orçamento.</p>
      </AttributesTextContainer>
      <AttributesContainer>
        <Attributes/>
        <Attributes/>
        <Attributes/>
      </AttributesContainer>
    </Container>
  )
}

export default HomeScreen