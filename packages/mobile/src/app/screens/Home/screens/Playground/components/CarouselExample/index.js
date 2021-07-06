import React, { useState } from 'react';
import { Image } from 'react-native';
import Card from '@components/Card';
import configStyles from '@config/styles';
import Carousel from '@components/Carousel';
import { alto, purple } from '@constants/colors';
import Text from '@components/Text';
import i18next from 'i18next';

import styles from './styles';
import { CARD_WIDTH, ITEMS_CAROUSEL } from './constants';

function CarouselExample() {
  const [step, setStep] = useState(0);
  const renderItem = ({ item }) => <Image source={item.source} style={styles.image} />;

  return (
    <Card style={[configStyles.cardExample, styles.card]}>
      <Text>{i18next.t('Playground:Carousel')}</Text>
      <Carousel
        data={ITEMS_CAROUSEL}
        sliderWidth={CARD_WIDTH}
        renderItem={renderItem}
        activeIndex={step}
        activeDotColor={purple}
        inactiveDotColor={alto}
        onSnapToItem={setStep}
        scrollEnabled
      />
    </Card>
  );
}

export default CarouselExample;
