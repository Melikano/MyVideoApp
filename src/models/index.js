// @flow
export type User = {|
  +username: string,
  +password: string,
|};

export type Country = 'IND' | 'USA' | 'AUS';
export type Tag =
  | 'action'
  | 'adventure'
  | 'fantasy'
  | 'sci-fi'
  | 'thriller'
  | 'documentary'
  | 'romance'
  | 'animation'
  | 'comedy'
  | 'family'
  | 'musical'
  | 'mystery'
  | 'western'
  | 'drama'
  | 'history'
  | 'sport'
  | 'crime'
  | 'horror'
  | 'war'
  | 'biography'
  | 'music'
  | 'game-show'
  | 'reality-tv'
  | 'news'
  | 'short'
  | 'film-noir';

export type Language = 'hindi' | 'english';

export type Movie = {|
  +id: number,
  +title: string,
  +date_of_releas: string,
  +rating: number,
  +tags: Array<Tag>,
  +director: string,
|};

export type Status = 'authorized' | 'unAuthorized';

export type Category = {|
  +id: number,
  +name: string,
|};
export type State = {
  loading?: boolean,
  status?: Status,
  token?: string,
  user?: User,
  currentCategory?: Category,
};

export type Action = {
  +type: string,
  +data?: Object | string | Status | Array<any>,
};

export type Dispatch = (Action) => void;
