import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types'

const initialState = {
  loading: false,
  alert: { text: null, type: null },
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_ALERT:
      return {
        ...state,
        alert: { text: action.payload.text, type: action.payload.type },
      }
    case HIDE_ALERT:
      return { ...state, alert: { text: null, type: null } }
    default:
      return state
  }
}
