import type { Action, State } from '../../constants/types';
import actionTypes from '../actions/actionTypes';

const rootReducer = function (state: State = {}, action: Action) {
  switch (action.type) {
    case actionTypes.requestSuccess: {
      return { ...state, status: 'success' };
    }

    case actionTypes.requestFailure: {
      return { ...state, status: 'error' };
    }

    case actionTypes.requestLoading: {
      return { ...state, status: 'loading' };
    }

    case actionTypes.setToken: {
      return { ...state, token: action.data };
    }
    default:
      return state;
  }
};

export default rootReducer;
