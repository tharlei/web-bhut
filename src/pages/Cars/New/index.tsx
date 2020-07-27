import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  InputsCard, Input, Button
} from './styles';

const CarsNew = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    price: '',
    age: 0
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('cars', formData);
      toast.success("Carro criado com sucesso!");
      history.push('/cars');
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div id="page-cars-new">
      <Container>
        <Breadcrumbs>
          <li>
            <BreadcrumbsLink to="/">Início</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <li>
            <BreadcrumbsLink to="/cars">Lista de carros</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Novo carro</BreadcrumbsDisabled>
        </Breadcrumbs>

        <InputsCard>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Nome</label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Nome do carro"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="brand">Marca</label>
              <Input
                type="text"
                name="brand"
                id="brand"
                placeholder="Marca do carro"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Idade do carro"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="Preço do carro"
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit">
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