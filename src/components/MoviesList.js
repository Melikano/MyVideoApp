// @flow

import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import type { Movie } from '../models';
import MovieItem from './MovieItem';
import { colors } from '../constants';

type Props = {
  movies: Array<Movie>,
  +fetchNextPage: Function,
};
const MoviesList = function ({ movies, fetchNextPage }: Props): React$Node {
  const loading = useSelector((state) => state.loading);

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <MovieItem movie={item} />}
      onEndReachedThreshold={0.1}
      onEndReached={fetchNextPage}
      ListFooterComponent={() =>
        loading && (
          <ActivityIndicator
            color={colors.white}
            style={{ marginBottom: 20 }}
          />
        )
      }
      columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
      numColumns={2}
      style={{
        width: '90%',
        alignSelf: 'center',
        marginBottom: 80,
      }}
    />
  );
};
export default MoviesList;
