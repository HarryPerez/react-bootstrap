import React from 'react';
import i18next from 'i18next';
import Card from '@components/Card';
import Text from '@components/Text';
import styles from '@config/styles';

function CardExample() {
  return (
    <Card style={styles.cardExample}>
      <Text>{i18next.t('Playground:Card')}</Text>
    </Card>
  );
}

export default CardExample;
