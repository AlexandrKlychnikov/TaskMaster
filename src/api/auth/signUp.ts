import { API_URL } from './../../constants/authentication';
import { Endpoint } from './../../constants/navigation';
import { IFormInputs, IUserAPI } from 'types/types';

export const signUp = async (data: IFormInputs): Promise<IUserAPI> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.SIGN_UP}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, login: data.login, password: data.password }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`, {
        cause: response.status,
      });
    }

    const newUser: IUserAPI = await response.json();
    return newUser;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
