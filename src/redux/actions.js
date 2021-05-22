import axios from 'axios'

import {
  SHOW_LOADER,
  HIDE_LOADER,
  HIDE_ALERT,
  SHOW_ALERT,
  CREATE_COMMENT,
  FETCH_COMMENTS,
} from './types'
import api from '../api'

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}
export function createComment(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const response = await axios.post(api.comments, data)
      const json = await response.data
      dispatch({ type: CREATE_COMMENT, payload: json })
      if (response.statusText === 'Created') {
        dispatch(showAlert({ text: 'Message created!', type: 'success' }))
      } else {
        dispatch(showAlert({ text: 'Message not created!', type: 'danger' }))
      }
      dispatch(hideLoader())
    } catch (error) {
      dispatch(showAlert(`Something is wrong. ${error.message}`))
      dispatch(hideLoader())
    }
  }
}

export function fetchComments() {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const response = await axios.get(api.comments + '/?sort=desc')
      const json = await response.data
      dispatch({ type: FETCH_COMMENTS, payload: json })
      dispatch(hideLoader())
    } catch (error) {
      dispatch(showAlert(`Something is wrong. ${error.message}`))
      dispatch(hideLoader())
    }
  }
}
