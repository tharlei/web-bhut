import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 15px;
  min-height: calc(100vh - 123px);
`;

export const Breadcrumbs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 18px 12px;
  align-items: center;

  li {
    font-size: 15px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  color: var(--blue-dark);
  text-decoration: none;
`;

export const BreadcrumbsDivider = styled.li`
  color: rgba(0,0,0,.38);
  padding: 0 12px;
`;

export const BreadcrumbsDisabled = styled.li`
  color: rgba(0,0,0,.38);
`;

export const ActionCard = styled.div`
  display: flex;
  padding: 36px 0 36px 0;
`;

export const ActionCardContent = styled.div`
  background: #fff;
  border-radius: 4px;
  border: thin solid rgba(0,0,0,.12);

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
  }
`;

export const ActionCardLogo = styled.div`
  margin: 10px;
  height: 40px;
  min-width: 40px;
  width: 40px;
  margin-right: 16px;
  background-color: var(--blue-dark);
  border-color: var(--blue-dark);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #FFF;
    font-size: 16px;
  }
`;

export const ActionCardText = styled.div`
  display: flex;  
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;

  span {
    color: rgba(0,0,0,.87);
  }

  svg {
    color: rgba(0,0,0,.54);
    margin: 0 30px 0 30px;
  }
`;


export const TableCard = styled.div`
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 4px;
  color: #333;
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

export const TableCardContent = styled.div`
  padding: .9375rem 20px;
  position: relative;
`;


export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  thead th {
    color: rgba(0,0,0,.6);
    user-select: none;
    font-size: .75rem;
    font-weight: bold;
    padding: 0 16px;
    height: 24px;
    text-align: left;
  }

  tbody tr {
    position: relative;
  }

  tbody tr td {
    padding: 12px 8px;
    vertical-align: middle;
    border-color: #ddd;
    text-align: left;
  }

  tr {
    border-bottom: thin solid rgba(0,0,0,.12);
  }
`;

export const ButtonEdit = styled(Link)`
  color: #4caf50;
`;

export const ButtonDelete = styled(Link)`
  color: #f44336;
  margin-left: 20px;
`;