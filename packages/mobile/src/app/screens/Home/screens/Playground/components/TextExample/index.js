import Text from '@components/Text';
import i18next from 'i18next';
import React from 'react';

function TextExample() {
  return <Text>{i18next.t('Playground:Text')}</Text>;
}

export default TextExample;
