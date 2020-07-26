import React, { useEffect, useState, ChangeEvent } from 'react';
import api from '../../../services/api'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaTrash, FaPencilAlt, FaPlus, FaArrowRight, FaRegQuestionCircle } from 'react-icons/fa';

import {
  Container, Breadcrumbs, BreadcrumbsDisabled, Modal, ModalContent, BreadcrumbsLink, BreadcrumbsDivider,
  ActionWrapper, ActionCard, ActionCardContent, ActionCardLogo, ActionCardText, Input,
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
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [carToDelete, setCarToDelete] = useState<string>('')

  useEffect(() => {
    refreshCars();
  }, [])

  async function refreshCars() {
    try {
      const carsUnformatted = await api.get<Car[]>('cars');

      const carsPayload = carsUnformatted.data.map(car => {
        const price = parseFloat(car.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        return {
          ...car,
          price
        }
      });

      setCars(carsPayload);
      setFilteredCars(carsPayload);
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value) {
      setFilteredCars(cars);
      return;
    }

    const carsPayload = cars.filter(car => {
      const title = car.title.toLowerCase().trim();
      const search = value.toLowerCase().trim();
      const data = title.indexOf(search) >= 0 ? car : null

      return data;
    })
    setFilteredCars(carsPayload);
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
          <li>
            <BreadcrumbsLink to="/">Início</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Lista de carros</BreadcrumbsDisabled>
        </Breadcrumbs>

        <ActionWrapper>
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

          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar por carros"
            onChange={handleSearch}
          />
        </ActionWrapper>

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
                  filteredCars.map(car => (
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