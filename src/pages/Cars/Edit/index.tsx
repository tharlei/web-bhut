import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  InputsCard, Input, Button
} from './styles';

interface Car {
  _id: string;
  title: string;
  brand: string;
  age: number;
  price: string;
}

const CarsEdit = (props: any) => {

  const { id } = props.match.params;

  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    price: '',
    age: 0
  });

  useEffect(() => {
    api.get<Car>(`cars/${id}`)
      .then(car => {
        delete car.data._id;
        setFormData(car.data)
      });
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.put(`cars/${id}`, formData);
      toast.success("Carro editado com sucesso!");
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
            <BreadcrumbsLink to="/">Lista de carros</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Editar carro</BreadcrumbsDisabled>
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
                value={formData.title}
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
                value={formData.brand}
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
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Preço do carro"
                value={formData.price}
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

export default CarsEdit;