import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import ModalActions from '@redux/Modal/actions';

import { getModalOptions } from './utils';
import styles from './styles';

function ConnectedModal() {
  const modalType = useSelector(state => state.modal.modalType);
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const options = getModalOptions(modalType);
  const Content = options?.component;

  useEffect(() => {
    if (!isVisible && modalType) {
      setIsVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalType]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHide = () => {
    dispatch(ModalActions.clearModalType());
  };

  const gestureOptions =
    options && !options.blockGestures ? { onBackdropPress: handleClose, onSwipeComplete: handleClose } : {};

  return (
    <Modal
      style={[styles.modal, options?.bottom && styles.bottom]}
      isVisible={isVisible}
      onModalHide={handleHide}
      useNativeDriver
      animationInTiming={750}
      animationOutTiming={750}
      hideModalContentWhileAnimating
      {...gestureOptions}>
      <>{Content ? <Content onClose={handleClose} {...modalType} /> : null}</>
    </Modal>
  );
}

export default ConnectedModal;
