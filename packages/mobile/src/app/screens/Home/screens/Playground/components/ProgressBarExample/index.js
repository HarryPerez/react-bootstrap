import React from 'react';
import Text from '@components/Text';
import ProgressBar from '@components/ProgressBar';
import i18next from 'i18next';
import Card from '@components/Card';
import { PROGRESS_BAR_VALUES } from '@constants/playground';
import configStyles from '@config/styles';

import styles from './styles';

function ProgressBarExample() {
  return (
    <Card style={configStyles.cardExample}>
      <Text style={styles.text}>{i18next.t('Playground:ProgressBar')}</Text>
      <ProgressBar progressValues={PROGRESS_BAR_VALUES} style={styles.progressBar} />
    </Card>
  );
}

export default ProgressBarExample;
