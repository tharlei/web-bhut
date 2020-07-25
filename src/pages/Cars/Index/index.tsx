import React, { useEffect, useState } from 'react';
import api from '../../../services/api'

import { FaTrash, FaPencilAlt, FaPlus, FaArrowRight } from 'react-icons/fa';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  ActionCard, ActionCardContent, ActionCardLogo, ActionCardText,
  TableCard, TableCardContent, Table, ButtonEdit, ButtonDelete
} from './styles';

import { Link } from 'react-router-dom';

interface Car {
  _id: string;
  title: string;
  brand: string;
  age: number;
  price: string;
}

const CarsIndex = () => {

  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    api.get<Car[]>('cars').then(res => {
      const cars = res.data.map(car => {
        const price = parseFloat(car.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        return {
          ...car,
          price
        }
      })

      setCars(cars);
    })
  }, [])

  return (
    <div id="page-cars-list">
      <Container>
        <Breadcrumbs>
          <BreadcrumbsDisabled> Lista de carros </BreadcrumbsDisabled>
        </Breadcrumbs>

        <ActionCard>
          <ActionCardContent>
            <Link to="/cars/new">
              <ActionCardLogo>
                <FaPlus />
              </ActionCardLogo>
              <ActionCardText>
                <span>Adicionar novo carro</span>
                <FaArrowRight />
              </ActionCardText>
            </Link>
          </ActionCardContent>
        </ActionCard>

        <TableCard>
          <TableCardContent>
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Marca</th>
                  <th>Idade</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {
                  cars.map(car => (
                    <tr key={car._id}>
                      <td>{car.title}</td>
                      <td>{car.brand}</td>
                      <td>{car.age}</td>
                      <td>{car.price}</td>
                      <td>
                        <ButtonEdit to="/">
                          <FaPencilAlt />
                        </ButtonEdit>
                        <ButtonDelete to="/">
                          <FaTrash />
                        </ButtonDelete>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </TableCardContent>
        </TableCard>
      </Container>
    </div>
  )
}

export default CarsIndex;