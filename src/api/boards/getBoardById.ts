import { IBoardOutput } from 'types/types';
import { API_URL } from '../../constants/authentication';
import { Endpoint } from '../../constants/navigation';

export const getBoardById = async (id: string, token: string): Promise<IBoardOutput> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.BOARDS}/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`, {
        cause: response.status,
      });
    }

    const board: IBoardOutput = await response.json();
    return board;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
