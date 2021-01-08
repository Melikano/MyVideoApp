// @flow

import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { getMovies } from '../redux/actions/actions';
import MovieItem from './MovieItem';
import { MHeader, MLoader, MSearchbox } from './basics';

type Props = {|
  +categorized?: boolean,
  +tag?: string,
  +navigateToCategories?: Function,
|};
const MoviesList = function ({
  tag,
  categorized,
  navigateToCategories,
}: Props): React$Node {
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
    if (movies.hasNext) {
      setCurrentPage(currentPage + 1);
    }
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
      {categorized && (
        <MHeader
          title={`دسته‌بندی ${tag || ''}`}
          showBack
          onBackPress={navigateToCategories}
        />
      )}
      <MSearchbox onChangeText={onSearch} />
      <FlatList
        data={allMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieItem movie={item} />}
        onEndReachedThreshold={0.2}
        onEndReached={goToNextPage}
        ListFooterComponent={() => loading && <MLoader style={style.footer} />}
        numColumns={2}
        style={style.moviesList}
      />
    </View>
  );
};

const style = StyleSheet.create({
  moviesList: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: 10,
  },
  footer: {
    marginBottom: 20,
  },
});
export default MoviesList;
