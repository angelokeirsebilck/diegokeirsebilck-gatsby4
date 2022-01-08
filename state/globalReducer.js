import {
  CHANGE_IS_SUBMITTING,
  CHANGE_LANDINGTEXT,
  CHANGE_IS_FORM_TEXT,
  CHANGE_IS_ERROR,
  CHANGE_IS_NAV_TOP,
  CHANGE_IS_NAV_OPEN,
} from '../actions/types';

const initialState = {
  isSubmitting: false,
  landingText: 'binnenkort online',
  formText: false,
  isError: false,
  isNavTop: true,
  isNavOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IS_SUBMITTING:
      return { ...state, isSubmitting: action.payload };
    case CHANGE_LANDINGTEXT:
      return { ...state, landingText: action.payload };
    case CHANGE_IS_FORM_TEXT:
      return { ...state, formText: action.payload };
    case CHANGE_IS_ERROR:
      return { ...state, isError: action.payload };
    case CHANGE_IS_NAV_TOP:
      return { ...state, isNavTop: action.payload };
    case CHANGE_IS_NAV_OPEN:
      return { ...state, isNavOpen: action.payload };
    default:
      return state;
  }
};
