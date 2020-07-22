import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 256px;
  max-height: calc(100% - 0px);
  position: fixed;
  z-index: 6;
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
`;

export const Header = styled.header`
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 256px;
  right: 0px;
  background-color: var(--blue-dark);
  border-color: var(--blue-dark);
  display: flex;
  position: fixed;
  top: 0;
  z-index: 5;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
`;

export const Main = styled.main`
  background: #fafafa;
  padding: 64px 0px 0px 256px;
  flex: 1 1 auto;
  max-width: 100%;
`;

export const WrapperImage = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  img {
    width: 120px;
  }
`;