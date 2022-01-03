import {
  CHANGE_IS_SUBMITTING,
  CHANGE_LANDINGTEXT,
  CHANGE_IS_FORM_TEXT,
  CHANGE_IS_ERROR,
  CHANGE_IS_NAV_TOP,
} from './types';

export const changeIsSubmitting = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_IS_SUBMITTING,
    payload: value,
  });
};

export const changeLandingText = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_LANDINGTEXT,
    payload: value,
  });
};

export const changeIsError = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_IS_ERROR,
    payload: value,
  });
};

export const changeIsFormText = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_IS_FORM_TEXT,
    payload: value,
  });
};

export const changeIsNavTop = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_IS_NAV_TOP,
    payload: value,
  });
};
