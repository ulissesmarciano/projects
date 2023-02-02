import { IGreetingScreen } from './types'
//import { RiUser3Fill, RiLock2Fill } from "react-icons/ri";
import { ButtonContainer, Container, ProjectsContainer, GreetingContainer, ProjectDescriptionContainer, StartContainer } from './styles'

import Button from '../../components/Button';
import ProjectItem from '../../components/ProjectItem';

const GreetingScreen = ({greetingScreenVariant, scrollbarVariant, projectItemVariant, backgroundVariant}:IGreetingScreen) => {

  return (
    <Container variant={backgroundVariant}>
      <StartContainer variant={backgroundVariant}>
        <div className='dimensionContainer'>
        <GreetingContainer variant={greetingScreenVariant}>
            
          <h2>Organize seu trabalho</h2>
          <p>Crie tarefas e organize por prioridade para que seu dia seja mais organizado. Conte com nossas melhorias para uma ótima experiência em nossa plataforma.</p>
        </GreetingContainer>
        <ButtonContainer>
          <Button to='/logon' title='começar agora' />
        </ButtonContainer>
        </div>
      </StartContainer>
      <ProjectDescriptionContainer>
        <h4>Escolha seu organizador</h4>
        <p>Explore as adividades disponíveis dentro da plataforma para que possa realizar a organização do seu dia a dia.</p>
      </ProjectDescriptionContainer>
      <ProjectsContainer variant={scrollbarVariant}>
        <ProjectItem projectItemVariant={projectItemVariant}/>
        <ProjectItem projectItemVariant={projectItemVariant}/>
        <ProjectItem projectItemVariant={projectItemVariant}/>
      </ProjectsContainer>
      {/* <div>
        <div>
          <RiUser3Fill/>
          <input type="text" />
        </div>
        <div>
          <RiLock2Fill/>
          <input type="password"/>
        </div>
        <div>
          Salvar senha?
          <input type="checkbox"/>
        </div>
      </div> */}
    </Container>
  )
}

export default GreetingScreen