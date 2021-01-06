// @flow
import axios from 'axios';
import type { User } from '../constants/types';
import urls from '../constants/urls';

export function fetchToken(user: User): Promise<any> {
  return axios({
    method: 'POST',
    url: urls.getToken,
    headers: {
      'Content-type': 'application/json',
    },
    data: JSON.stringify(user),
  });
}
