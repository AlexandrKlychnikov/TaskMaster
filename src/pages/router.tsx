import Layout from 'components/Layout';
import React, { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth } from './Auth';
import { BoardPage } from './BoardPage';
import { Boards } from './Boards';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Profile } from './Profile';
import { useAppSelector } from 'store/hooks';
import { PAGE_PATH } from 'constants/navigation';
import { subPage } from 'types/types';

const Router = () => {
  const { user } = useAppSelector((state) => state);
  const isAuth = (element: ReactNode) => {
    return user ? element : <Navigate to={PAGE_PATH.AUTH} state={subPage.logIn} />;
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/boards" element={isAuth(<Boards />)} />
        <Route path="/profile" element={isAuth(<Profile />)} />
        <Route path="*" element={<NotFound />} />
        <Route path="/boards/:boardId" element={isAuth(<BoardPage />)} />
      </Route>
    </Routes>
  );
};

export default Router;
