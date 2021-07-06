import React, { useMemo } from 'react';
import Row from '@components/Row';
import { ViewPropTypes, View } from 'react-native';
import { string, arrayOf, shape, number } from 'prop-types';
import { isFirstItem, isLastItem } from '@utils/array';

import styles from './styles';

function ProgressBar({ progressValues, style }) {
  const values = useMemo(() => progressValues.filter(({ progress }) => progress > 0), [progressValues]);
  return (
    <View style={[styles.container, style]}>
      {values.map(({ key, color, progress }, index) => (
        <Row
          key={key}
          style={[
            isFirstItem(index) && styles.firstProgress,
            isLastItem(values, index) && styles.lastProgress,
            {
              backgroundColor: color,
              width: `${progress}%`
            }
          ]}
        />
      ))}
    </View>
  );
}

ProgressBar.propTypes = {
  progressValues: arrayOf(
    shape({
      key: string,
      color: string,
      progress: number
    })
  ),
  style: ViewPropTypes.style
};

export default ProgressBar;
