// @flow
import { fetchToken } from '../../services/services';
import type { Action, User, Dispatch } from '../../constants/types';
import actionTypes from './actionTypes';

function success(): Action {
  return {
    type: actionTypes.requestSuccess,
  };
}
function failure(): Action {
  return {
    type: actionTypes.requestFailure,
  };
}
function loading(): Action {
  return {
    type: actionTypes.requestLoading,
  };
}

function setToken(token: string): Action {
  return { type: actionTypes.setToken, data: token };
}

export function getToken(user: User): (Dispatch) => void {
  //$FlowFixMe
  return async function (dispatch: Dispatch): void {
    dispatch(loading());

    try {
      const tokenRes = await fetchToken(user);
      const { token } = tokenRes;

      dispatch(success());
      dispatch(setToken(token));
    } catch (error) {
      console.error(error);
      dispatch(failure());
    }
  };
}
