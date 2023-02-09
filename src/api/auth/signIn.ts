import { API_URL } from './../../constants/authentication';
import { Endpoint } from './../../constants/navigation';
import { IFormInputs, ISignInResponse } from 'types/types';

export const signIn = async (data: IFormInputs): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}${Endpoint.SIGN_IN}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: data.login, password: data.password }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`, {
        cause: response.status,
      });
    }

    const result: ISignInResponse = await response.json();
    const token = result.token;
    return token;
  } catch (e: unknown) {
    const err = e as Error;
    throw err;
  }
};
