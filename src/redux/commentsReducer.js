import { CREATE_COMMENT, FETCH_COMMENTS } from './types'

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] }
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload }
    default:
      return state
  }
}
