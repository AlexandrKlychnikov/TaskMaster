import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from 'styles/styles';
import { getBoardById } from 'api/boards/getBoardById';
import { IBoardOutput } from 'types/types';
import { useAppSelector } from 'store/hooks';
import BoardManagement from 'components/BoardManagement';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useMediaQuery from '@mui/material/useMediaQuery';

export const BoardPage = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const { boardId } = useParams();
  const { token } = useAppSelector((state) => state.user);
  const [board, setBoard] = useState<IBoardOutput>(null);
  useEffect(() => {
    (async () => {
      const data = await getBoardById(boardId, token);
      setBoard(data);
    })();
  }, []);
  return (
    <Container sx={styles.container}>
      <Stack direction="row" spacing={3} height={60}>
        <Stack direction="column" sx={{ justifyContent: 'flex-start' }}>
          <Stack direction="row" spacing={matches ? 8 : 2}>
            <Typography sx={{ paddingTop: '0.5em', display: { xs: 'none', sm: 'block' } }}>
              Title:
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: 'start', fontWeight: '600', fontSize: { xs: '18px', sm: '24px' } }}
            >
              {board?.title}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography sx={{ textAlign: 'start', display: { xs: 'none', sm: 'block' } }}>
              Description:
            </Typography>
            <Typography sx={{ textAlign: 'start', fontWeight: '600' }}>
              {board?.description?.substring(0, 31)}
            </Typography>
            <DescriptionTooltip title={board?.description}>
              <Typography>
                {board?.description?.length > 30 && (
                  <MoreHorizIcon
                    sx={{
                      border: '2px solid #61dafb',
                      borderRadius: '50%',
                      marginLeft: '-10px',
                      color: '#61dafb',
                    }}
                  />
                )}
              </Typography>
            </DescriptionTooltip>
          </Stack>
        </Stack>
        <Box sx={{ position: 'relative' }}>
          <BoardManagement />
        </Box>
      </Stack>
      <Divider />
      <Stack mt={2}>
        <Column>
          <Button variant={'outlined'} sx={{ color: '#61dafb', border: '2px solid #61dafb' }}>
            +Add column
          </Button>
        </Column>
      </Stack>
    </Container>
  );
};

const DescriptionTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: '1em',
    border: '1px solid #dadde9',
  },
});

const Column = styled(Box)({
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
});
