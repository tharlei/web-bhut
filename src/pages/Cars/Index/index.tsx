import React, { useEffect, useState } from 'react';
import api from '../../../services/api'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaTrash, FaPencilAlt, FaPlus, FaArrowRight, FaRegQuestionCircle } from 'react-icons/fa';

import {
  Container, Breadcrumbs, BreadcrumbsDisabled, Modal, ModalContent,
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
  const history = useHistory();

  const [cars, setCars] = useState<Car[]>([])
  const [carToDelete, setCarToDelete] = useState<string>('')

  useEffect(() => {
    refreshCars();
  }, [])

  async function refreshCars() {
    try {
      const carsPayload = await api.get<Car[]>('cars');

      const cars = carsPayload.data.map(car => {
        const price = parseFloat(car.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        return {
          ...car,
          price
        }
      });

      setCars(cars);
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  function handleEdit(id: string) {
    history.push(`/cars/${id}`);
  }

  async function handleDelete() {
    try {
      await api.delete(`cars/${carToDelete}`);
      toast.success('Carro excluído com sucesso!');
      refreshCars();
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
    setCarToDelete('')
  }

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
                        <ButtonEdit onClick={() => handleEdit(car._id)}>
                          <FaPencilAlt />
                        </ButtonEdit>
                        <ButtonDelete onClick={() => setCarToDelete(car._id)}>
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

      <Modal active={!!carToDelete}>
        <ModalContent>
          <FaRegQuestionCircle />
          <h1>Você realmente deseja excluir?</h1>
          <div>
            <button onClick={handleDelete}>Sim, vou excluir</button>
            <span onClick={() => setCarToDelete('')}>Não, desisti de excluir</span>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CarsIndex;