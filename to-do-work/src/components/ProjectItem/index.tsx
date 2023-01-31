import { IProjectItem } from "./types"

import { Container } from "./styles"

const ProjectItem = ({projectItemVariant}:IProjectItem) => {
  return (
    <Container variant={projectItemVariant}>
      <div>
        <h3>Cronograma Diário</h3>
      </div>
      <div>
        <ul>
          <li>Crie tarefas.</li>
          <li>Acicione tempo de execução.</li>
          <li>Insira o nível de prioridade.</li>
        </ul>
      </div>
      <div></div>
    </Container>
  )
}

export default ProjectItem