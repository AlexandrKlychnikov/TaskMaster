import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { getAllBoards } from 'api/boards/getAllBoards';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Board } from 'components/Board';
import { setBoards } from 'store/slices/boardsSlice';
import DeleteBoardDialog from 'components/DeleteBoardDialog';
import CircularProgress from '@mui/material/CircularProgress';
import { setLoading } from 'store/slices/loadSlice';

export const Boards = () => {
  const {
    user: { token },
    allBoards,
    loading,
    alert: { isSuccess },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  async function dispatchBoards() {
    dispatch(setLoading(true));
    const boards = await getAllBoards(token);
    dispatch(setBoards([...boards]));
    dispatch(setLoading(false));
  }

  useEffect(() => {
    dispatchBoards();
  }, [isSuccess]);

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
      {loading && (
        <CircularProgress size={100} sx={{ position: 'absolute', top: '50%', left: '50%' }} />
      )}
      <DeleteBoardDialog />
      <Stack
        direction="row"
        gap="10px"
        flexWrap="wrap"
        justifyContent="start"
        alignItems="center"
        sx={{ maxWidth: { xs: '300px', md: '610px', lg: '920px' } }}
      >
        {allBoards.map((board) => (
          <Board
            _id={board._id}
            key={board._id}
            title={board.title}
            description={board.description}
          />
        ))}
      </Stack>
    </Container>
  );
};
