import React from 'react';
import { number, string } from 'prop-types';
import { FlatList } from 'react-native';

import { MAX_VISIBLE_DOTS } from './constants';
import styles from './styles';
import { dotType } from './utils';
import Dot from './components/Dot';

function Pagination({ activeIndex, dotsLength, activeDotColor, inactiveDotColor, dotSize }) {
  const infinite = dotsLength > MAX_VISIBLE_DOTS;
  const renderItem = ({ index }) => (
    <Dot
      type={dotType(infinite, activeIndex, index, dotsLength)}
      activeColor={activeDotColor}
      inactiveColor={inactiveDotColor}
      dotSize={dotSize}
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      horizontal
      keyExtractor={item => item.toString()}
      data={[...Array(infinite ? MAX_VISIBLE_DOTS : dotsLength).keys()]}
      renderItem={renderItem}
      scrollEnabled={false}
    />
  );
}

Pagination.propTypes = {
  activeDotColor: string.isRequired,
  activeIndex: number.isRequired,
  dotSize: number,
  inactiveDotColor: string.isRequired,
  dotsLength: number.isRequired
};

export default Pagination;
