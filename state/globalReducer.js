import {
  CHANGE_IS_SUBMITTING,
  CHANGE_LANDINGTEXT,
  CHANGE_IS_FORM_TEXT,
  CHANGE_IS_ERROR,
} from "../actions/types"

const initialState = {
  isSubmitting: false,
  landingText: "binnenkort online",
  formText: false,
  isError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IS_SUBMITTING:
      return { ...state, isSubmitting: action.payload }
    case CHANGE_LANDINGTEXT:
      return { ...state, landingText: action.payload }
    case CHANGE_IS_FORM_TEXT:
      return { ...state, formText: action.payload }
    case CHANGE_IS_ERROR:
      return { ...state, isError: action.payload }
    default:
      return state
  }
}
