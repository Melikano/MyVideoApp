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
      url: urls.user,
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

export async function fetchMovies(
  params: Object,
  onSuccess: Function,
  onError: Function,
) {
  try {
    const response = await axios({
      method: 'GET',
      url: urls.movie,
      params,
    });
    console.log(response);
    const {
      data: { results, next },
    } = response;
    onSuccess({ movies: results, hasNext: Boolean(next) });
  } catch (error) {
    console.error(error);
    console.log(error.response);
    onError(error);
  }
}
