// @flow
export type User = {|
  +username: string,
  +password: string,
|};

export type Status = 'authorized' | 'unAuthorized';

export type State = {
  status?: Status,
  token?: string,
  user?: User,
};

export type Action = {
  +type: string,
  +data?: Object | string | Status | Array<any>,
};

export type Dispatch = (Action) => void;
