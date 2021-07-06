import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import CardExample from './components/CardExample';
import TextInputExample from './components/TextInputExample';
import ButtonAndWebviewExample from './components/ButtonAndWebviewExample';
import TextExample from './components/TextExample';
import ProgressBarExample from './components/ProgressBarExample';
import CarouselExample from './components/CarouselExample';
import ModalExample from './components/ModalExample';

function Playground() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      {/* Include your component's example below... */}
      <TextExample />
      <ButtonAndWebviewExample />
      <CardExample />
      <TextInputExample />
      <ProgressBarExample />
      <CarouselExample />
      <ModalExample />
    </ScrollView>
  );
}

export default Playground;
