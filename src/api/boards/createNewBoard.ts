import { INewBoardInput, IBoardsOutput } from 'types/types';
import { API_URL } from './../../constants/authentication';
import { Endpoint } from './../../constants/navigation';

export const createNewBoard = async (
  data: INewBoardInput,
  token: string
): Promise<IBoardsOutput> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.BOARDS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`, {
        cause: response.status,
      });
    }

    const newBoard: IBoardsOutput = await response.json();
    return newBoard;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
