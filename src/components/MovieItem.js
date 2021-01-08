// @flow

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MText, MBadge } from './basics';
import type { Movie } from '../models';
import { images, dimensions, colors } from '../constants';

type Props = {
  movie: Movie,
};
const MovieItem = function ({ movie }: Props): React$Node {
  const {
    id,
    title,
    director,
    rating,
    tags,
    date_of_release,
    imageUrl,
  } = movie;
  return (
    <View style={style.movieItem} key={id}>
      <Image
        source={imageUrl || images.defaultMovie}
        style={style.movieImage}
      />
      <View style={style.movieInfoContainer}>
        <MText numberOfLines={1} fontStyle="bold" textStyle={style.movieTitle}>
          {title}
        </MText>
        <MText fontStyle="light">{director.substr(6)}</MText>
        <MText fontStyle="light">{date_of_release.split('-')[0]}</MText>
        <View style={style.badgesContainer}>
          {tags.map((tag) => (
            <MBadge badgeStyle={style.badge}>
              <MText textStyle={style.badgeTxt}>{tag}</MText>
            </MBadge>
          ))}
        </View>
        <View style={style.badgesContainer}>
          <MBadge square color={colors.yellow}>
            <MText
              textStyle={[
                style.ratingTxt,
                style.badgeTxt,
              ]}>{`IMDB:  ${rating}`}</MText>
          </MBadge>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  movieItem: {
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: colors.gray,
    borderRadius: 5,
    width: dimensions.screenWidth / 3,
    flexDirection: 'column',
    flex: 0.5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  movieImage: {
    flex: 1,
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieInfoContainer: {
    padding: 5,
  },
  movieTitle: {
    flex: 1,
    height: 20,
    overflow: 'hidden',
  },
  badgeTxt: {
    fontSize: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    marginHorizontal: 2,
    marginVertical: 3,
  },
  ratingTxt: {
    color: colors.black,
  },
});
export default MovieItem;
