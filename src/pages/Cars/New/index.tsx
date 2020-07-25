import React from 'react';
import { useHistory } from 'react-router-dom';

import { } from 'react-icons/fa';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  InputsCard, Input, Button
} from './styles';

const CarsNew = () => {
  const history = useHistory();

  return (
    <div id="page-cars-new">
      <Container>
        <Breadcrumbs>
          <li>
            <BreadcrumbsLink to="/">Lista de carros</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Novo carro</BreadcrumbsDisabled>
        </Breadcrumbs>

        <InputsCard>
          <form>
            <div>
              <label htmlFor="name">Nome</label>
              <Input type="text" name="name" placeholder="Nome do carro" required />
            </div>
            <div>
              <label htmlFor="brand">Marca</label>
              <Input type="text" name="brand" placeholder="Marca do carro" required />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <Input type="number" name="age" placeholder="Idade do carro" required />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <Input type="text" name="price" placeholder="Preço do carro" required />
            </div>

            <Button>
              <span>
                Salvar
              </span>
            </Button>
          </form>
        </InputsCard>
      </Container>
    </div>
  )
}

export default CarsNew;