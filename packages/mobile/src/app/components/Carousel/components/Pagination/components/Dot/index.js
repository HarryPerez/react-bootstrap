import React from 'react';
import { View } from 'react-native';
import { number, string } from 'prop-types';

import { dotStyle } from './constants';
import generateStyles from './styles';

function Dot({ activeColor, inactiveColor, type, dotSize = 10 }) {
  const styles = generateStyles(dotSize);
  return <View style={[styles.dot, dotStyle(activeColor, inactiveColor, styles)[type]]} />;
}

Dot.propTypes = {
  activeColor: string.isRequired,
  dotSize: number,
  inactiveColor: string.isRequired,
  type: string.isRequired
};

export default Dot;
