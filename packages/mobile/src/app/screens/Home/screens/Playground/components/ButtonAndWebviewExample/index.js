import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '@components/Button';
import Routes from '@constants/routes';
import i18next from 'i18next';

import styles from './styles';

function ButtonAndWebviewExample() {
  const navigation = useNavigation();
  const handleOpenWebview = () => navigation.navigate(Routes.ZerfWeb);
  return (
    <Button
      style={styles.button}
      textStyle={styles.buttonText}
      title={i18next.t('Playground:Button')}
      onPress={handleOpenWebview}
      lowercase
    />
  );
}

export default ButtonAndWebviewExample;
