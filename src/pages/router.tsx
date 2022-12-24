import Layout from 'components/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth } from './Auth';
import { BoardPage } from './BoardPage';
import { Boards } from './Boards';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Profile } from './Profile';

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/boards" element={<Boards />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/bord_:index" element={<BoardPage />} />
    </Route>
  </Routes>
);

export default Router;
