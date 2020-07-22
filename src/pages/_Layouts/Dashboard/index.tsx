import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { } from 'react-icons/fa';

import {
  Nav, Header, Main, WrapperImage
} from './styles';

import logo from '../../../assets/logo.png';

interface Props {
  children: JSX.Element
}

const Dashboard = (props: Props) => {

  return (
    <div id="layout-dashboard">
      <Nav>
        <WrapperImage>
          <Link to="/">
            <img src={logo} alt='BHUT' />
          </Link>
        </WrapperImage>
      </Nav>
      <Header>

      </Header>
      <Main>
        {props.children}
      </Main>
    </div>
  )
}

export default Dashboard;