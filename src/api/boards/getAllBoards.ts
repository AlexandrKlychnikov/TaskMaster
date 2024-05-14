import { IBoardOutput } from 'types/types';
import { API_URL } from '../../constants/authentication';
import { Endpoint } from '../../constants/navigation';

export const getAllBoards = async (token: string): Promise<IBoardOutput[]> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.BOARDS}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const badToken = response.status === 403 ? ' - token is not valid' : null;
      throw new Error(`Request failed with status code ${response.status}${badToken}`, {
        cause: response.status,
      });
    }

    const boards: IBoardOutput[] = await response.json();
    return boards;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
