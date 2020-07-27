import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { FaCar } from 'react-icons/fa';

import {
  Container, CardsWrapper, Card, CardIcon, CardTitle, CardDescription
} from './styles';

const Home = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [amountCars, setAmountCars] = useState<number>(0)

  useEffect(() => {
    api.get('cars')
      .then(res => {
        setAmountCars(res.data.length)
        setLoading(false);
      });
  }, [])

  return (
    <div id="page-home">
      <Container>
        {
          !loading && (
            <CardsWrapper>
              <Card to="/cars">
                <CardIcon>
                  <FaCar />
                </CardIcon>
                <CardTitle>
                  <p>{amountCars}</p>
                </CardTitle>
                <CardDescription>
                  Cadastros
                </CardDescription>
              </Card>
            </CardsWrapper>
          )
        }
      </Container>
    </div>
  )
}

export default Home;