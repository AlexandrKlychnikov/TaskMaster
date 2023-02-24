import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { getAllBoards } from 'api/boards/getAllBoards';
import { useAppSelector } from 'store/hooks';
import { IBoardsOutput } from 'types/types';
import { Board } from 'components/Board';

export const Boards = () => {
  const { token } = useAppSelector((state) => state.user);
  const [boards, setBoards] = useState<IBoardsOutput[]>([]);
  useEffect(() => {
    async function dispatchBoards() {
      const boards = await getAllBoards(token);
      setBoards([...boards]);
    }
    dispatchBoards();
  }, [boards]);
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Stack
        direction="row"
        gap="10px"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="center"
        sx={{ maxWidth: { xs: '300px', md: '610px', lg: '920px' } }}
      >
        {boards.map((board, i) => (
          <Board key={i} title={board.title} description={board.description} />
        ))}
      </Stack>
    </Container>
  );
};
