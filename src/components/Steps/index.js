import React from 'react'

import { Container, Step, Status } from './styles'

const Steps = () => (
  <Container>
    <Step current>
      <div>
        <Status />
        <strong>
          Etapa 1
        </strong>
      </div>
      <small>Descrição da etapa 1</small>
    </Step>
    <Step>
      <div>
        <Status />
        <strong>
          Etapa 2
        </strong>
      </div>
      <small>Descrição da etapa 2</small>
    </Step>
    <Step disabled>
      <div>
        <Status />
        <strong>
          Etapa 3
        </strong>
      </div>
      <small>Descrição da etapa 3</small>
    </Step>
    <Step disabled>
      <div>
        <Status />
        <strong>
          Etapa 4
        </strong>
      </div>
      <small>Descrição da etapa 4</small>
    </Step>
  </Container>
)

export default Steps
