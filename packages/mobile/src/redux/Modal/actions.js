import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes([], ['SET_MODAL_TYPE', 'CLEAR_MODAL_TYPE']), '@@MODAL');

const targets = {
  MODAL_TYPE: 'modalType'
};

const actionCreators = {
  setModalType: payload => ({
    type: actions.SET_MODAL_TYPE,
    target: targets.MODAL_TYPE,
    payload
  }),
  clearModalType: () => ({
    target: targets.MODAL_TYPE,
    type: actions.CLEAR_MODAL_TYPE
  })
};

export default actionCreators;
