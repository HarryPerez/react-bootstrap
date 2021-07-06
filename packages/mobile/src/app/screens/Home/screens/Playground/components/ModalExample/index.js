import React from 'react';
import i18next from 'i18next';
import Card from '@components/Card';
import configStyles from '@config/styles';
import Button from '@components/Button';
import { useDispatch } from 'react-redux';
import { MODAL_TYPES } from '@constants/modals';
import ModalActions from '@redux/Modal/actions';

import styles from './styles';

function ModalExample() {
  const dispatch = useDispatch();
  const onPress = () => dispatch(ModalActions.setModalType(MODAL_TYPES.EXAMPLE));
  return (
    <Card style={[configStyles.cardExample, styles.card]}>
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        title={i18next.t('Playground:OpenExampleModal')}
        onPress={onPress}
        lowercase
      />
    </Card>
  );
}

export default ModalExample;
