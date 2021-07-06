import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import { func } from 'prop-types';
import Text from '@components/Text';
import Button from '@components/Button';

import styles from './styles';

function ExampleModal({ onClose }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18next.t('Playground:ExampleModal')}</Text>
      <Button
        onPress={onClose}
        style={styles.upperButton}
        title={i18next.t('Playground:CloseExampleModal')}
        textStyle={styles.buttonText}
        lowercase
      />
    </View>
  );
}

ExampleModal.propTypes = {
  onClose: func.isRequired
};

export default ExampleModal;
