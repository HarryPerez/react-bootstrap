import React, { useState } from 'react';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import i18next from 'i18next';
import { emperor } from '@constants/colors';
import Card from '@components/Card';
import configStyles from '@config/styles';

import styles from './styles';

function TextInputExample() {
  const [sourceTextInput, setSourceTextInput] = useState(i18next.t('Playground:TextInputResult'));
  const handleChangeTextInput = source => setSourceTextInput(source);
  return (
    <Card style={configStyles.cardExample}>
      <TextInput
        containerStyle={styles.textInput}
        placeholder={i18next.t('Playground:TextInput')}
        placeholderTextColor={emperor}
        onChange={handleChangeTextInput}
      />
      <Text style={styles.text}>{sourceTextInput}</Text>
    </Card>
  );
}

export default TextInputExample;
