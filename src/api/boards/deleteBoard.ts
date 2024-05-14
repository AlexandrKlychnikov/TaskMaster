import { API_URL } from '../../constants/authentication';
import { Endpoint } from '../../constants/navigation';
import { IBoardOutput } from 'types/types';

export async function deleteBoard(token: string, boardId: string): Promise<IBoardOutput> {
  try {
    const response = await fetch(`${API_URL}${Endpoint.BOARDS}/${boardId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const board = await response.json();
    return board;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
}
