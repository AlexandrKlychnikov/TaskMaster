import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Header from './Header';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import AlertSnackbar from './AlertSnackbar';
interface IProps {
  theme: string;
}

const Layout = () => {
  const { theme } = useAppSelector((state) => state);

  return (
    <div className="container">
      <Header />
      <Main theme={theme}>
        <AlertSnackbar />
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

const Main = styled.main(({ theme }: IProps) => {
  const color = theme === 'dark' ? 'rgb(92, 92, 92)' : 'white';
  return `
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 3% 0;
  background-color: ${color};
  flex-grow: 1;
  `;
});

export default Layout;
