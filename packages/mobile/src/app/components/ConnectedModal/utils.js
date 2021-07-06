import { MODAL_TYPES } from '@constants/modals';

import ExampleModal from './components/ExampleModal';

export const getModalOptions = type =>
  type
    ? {
        [MODAL_TYPES.EXAMPLE]: {
          component: ExampleModal
        }
      }[type]
    : null;
