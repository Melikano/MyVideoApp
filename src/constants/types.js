// @flow
export type User = {|
  +username: string,
  +password: string,
|};

export type State = {
  status?: 'success' | 'loading' | 'error',
  token?: string,
};

export type Action = {
  +type: string,
  +data?: Object | string | Array<any>,
};

export type Dispatch = (Action) => void;
