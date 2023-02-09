import { API_URL } from './../../constants/authentication';
import { Endpoint } from './../../constants/navigation';
import { IUserAPI } from 'types/types';

export const getAllUsers = async (token: string): Promise<Array<IUserAPI>> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.USERS}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const usersList = await response.json();
    return usersList;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
