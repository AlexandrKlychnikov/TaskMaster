import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';

const Layout = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div className="container">
      <Header />
      <Main theme={theme}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

const Main = styled.main((props) => {
  const color = props.theme === 'dark' ? 'rgb(92, 92, 92)' : 'white';
  return `
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 5% 0;
  background-color: ${color};
  flex-grow: 1;
  `;
});

export default Layout;
