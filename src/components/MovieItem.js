// @flow

import React from 'react';
import { Image, View } from 'react-native';
import { MText } from './basics';
import type { Movie } from '../models';
import { images, dimensions, colors } from '../constants';

type Props = {
  movie: Movie,
};
const MovieItem = function ({ movie }: Props): React$Node {
  const { title } = movie;
  return (
    <View
      style={{
        borderWidth: 1,
        marginVertical: 10,
        borderColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
      }}>
      <Image
        source={images.defaultMovie}
        style={{
          width: dimensions.screenWidth / 3,
          height: (2 * dimensions.screenWidth) / 4,
          borderRadius: 5,
        }}
      />

      <MText fontStyle="bold" textStyle={{ overflow: 'hidden' }}>
        {title}
      </MText>
    </View>
  );
};

export default MovieItem;
