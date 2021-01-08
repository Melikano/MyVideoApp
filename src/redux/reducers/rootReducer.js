import type { Action, State } from '../../models';
import actionTypes from '../actions/actionTypes';

const rootReducer = function (
  state: State = {
    movies: {},
    categories: [],
    loading: false,
    error: null,
    token: '',
    user: null,
  },
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

    case actionTypes.setMovies: {
      const {
        movies: { lastPage, list },
      } = state;

      return {
        ...state,
        movies: {
          list:
            lastPage && lastPage > data.lastPage
              ? data.list
              : { ...(list || {}), ...data.list },
          hasNext: data.hasNext,
          lastPage: data.lastPage,
        },
        error: null,
        loading: false,
      };
    }

    case actionTypes.setCategories: {
      return { ...state, categories: data, error: null, loading: false };
    }

    default:
      return state;
  }
};

export default rootReducer;
