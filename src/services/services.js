// @flow
import axios from 'axios';
import type { User } from '../models';
import { urls } from '../constants';

export async function postUser(
  user: User,
  onSuccess: Function,
  onError: Function,
) {
  try {
    const response = await axios({
      method: 'POST',
      url: urls.getToken,
      headers: {
        'Content-type': 'application/json',
      },
      data: JSON.stringify(user),
    });
    onSuccess(response.data);
  } catch (error) {
    console.error(error);
    onError(error);
  }
}
