import type { Action, State } from '../../models';
import actionTypes from '../actions/actionTypes';

const rootReducer = function (
  state: State = {},
  { type, data }: Action,
): State {
  switch (type) {
    case actionTypes.requestLoading: {
      return { ...state, loading: true, error: null };
    }

    case actionTypes.requestFailure: {
      return { ...state, error: data, loading: false };
    }

    case actionTypes.setStatus: {
      return { ...state, status: data, loading: false };
    }

    case actionTypes.setToken: {
      return { ...state, token: data, error: null, loading: false };
    }

    case actionTypes.setUser: {
      return { ...state, user: data };
    }

    default:
      return state;
  }
};

export default rootReducer;
