import React, { useEffect, useState, useMemo } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions/actions';
import { MButton, MInput } from '../basics';
import MoviesList from '../MoviesList';

const HomeScreen = function () {
  const [currentPage, setCurrentPage] = useState(1);
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({ country, language, tags, search }, currentPage));
  }, [dispatch, country, language, tags, search, currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const allMovies = useMemo(
    () => (movies.list ? Object.values(movies.list) : []).flat(),
    [movies],
  );

  console.log(movies);

  const onSearch = (searchWord) => {
    setCurrentPage(1);
    setSearch(searchWord);
  };

  return (
    <View>
      <MInput label="search" onChangeText={onSearch} />
      <MoviesList movies={allMovies} fetchNextPage={goToNextPage} />
    </View>
  );
};

export default HomeScreen;
