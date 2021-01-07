// @flow
import { postUser } from '../../services/services';
import { getData, storeData } from '../../utils/localStorageUtils';
import type { Action, User, Dispatch } from '../../models';
import actionTypes from './actionTypes';

function loading(): Action {
  return {
    type: actionTypes.requestLoading,
  };
}

function failure(error: Object): Action {
  return {
    type: actionTypes.requestFailure,
    data: error,
  };
}

function setToken(token: string): Action {
  return {
    type: actionTypes.setToken,
    data: token,
  };
}

function setStatus(status: 'authorized' | 'unAuthorized') {
  return {
    type: actionTypes.setStatus,
    data: status,
  };
}

function setUser(user: ?User) {
  return {
    type: actionTypes.setUser,
    data: user,
  };
}

export function getTokenFromLocalStorage(): (Dispatch) => void {
  return function (dispatch: Dispatch) {
    dispatch(loading());
    getData(
      'token',
      (token) => {
        if (token) {
          dispatch(setStatus('authorized'));
        } else {
          dispatch(setStatus('unAuthorized'));
        }
      },
      (error) => dispatch(failure(error)),
    );
  };
}

export function getUserFromLocalStorage(): (Dispatch) => void {
  return function (dispatch: Dispatch) {
    getData('user', (user) => dispatch(setUser(JSON.parse(user))));
  };
}

export function login(user: User, onSuccess: Function): (Dispatch) => void {
  return function (dispatch: Dispatch) {
    dispatch(loading());
    postUser(
      user,
      ({ token }) => {
        dispatch(setToken(token));
        dispatch(setUser(user));
        storeData('user', user);
        storeData('token', token, () => {
          dispatch(setStatus('authorized'));
          onSuccess();
        });
      },
      (error) => dispatch(failure(error)),
    );
  };
}

export function logout(): (Dispatch) => void {
  return function (dispatch: Dispatch) {
    dispatch(setStatus('unAuthorized'));
    storeData('token', null);
    storeData('user', null, () => {
      dispatch(setUser(null));
    });
  };
}
