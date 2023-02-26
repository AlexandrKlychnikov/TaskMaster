import React from 'react';
import { useParams } from 'react-router-dom';

export const BoardPage = () => {
  const { boardId } = useParams();
  return <div>{boardId}</div>;
};
