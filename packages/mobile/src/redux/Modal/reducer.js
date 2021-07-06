import { createReducer, onReadValue, onSetValue } from 'redux-recompose';
import immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  modalType: null
};

const reducerDescription = {
  [actions.SET_MODAL_TYPE]: onReadValue(),
  [actions.CLEAR_MODAL_TYPE]: onSetValue(null)
};

export default createReducer(immutable(defaultState), reducerDescription);
