// @flow

import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { getMovies } from '../redux/actions/actions';
import MovieItem from './MovieItem';
import { MInput } from './basics';
import { colors } from '../constants';

type Props = {|
  +categorized?: boolean,
  +tag?: string,
|};
const MoviesList = function ({ tag, categorized }: Props): React$Node {
  const loading = useSelector((state) => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [country, setCountry] = useState();
  const [language, setLanguage] = useState();
  const [tags, setTags] = useState(tag);
  const [search, setSearch] = useState('');

  const movies = useSelector((state) =>
    categorized ? state.categorizedMovies : state.movies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovies(
        {
          country,
          language,
          tags,
          search,
        },
        categorized,
        currentPage,
      ),
    );
  }, [dispatch, country, language, tags, search, categorized, currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const allMovies = useMemo(
    () => (movies.list ? Object.values(movies.list) : []).flat(),
    [movies],
  );

  const onSearch = (searchWord) => {
    setCurrentPage(1);
    setSearch(searchWord);
  };

  return (
    <View>
      <MInput label="search" onChangeText={onSearch} />
      <FlatList
        data={allMovies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        onEndReachedThreshold={0.1}
        onEndReached={goToNextPage}
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
    </View>
  );
};
export default MoviesList;
