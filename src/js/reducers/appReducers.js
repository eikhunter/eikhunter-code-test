import {
  CHANGE_TEXT,
  UPDATE_COUNTER
} from '../actions/appActions'

const initialState = {
  count: 1,
  text: ''
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload
      }

    case UPDATE_COUNTER:
      return {
        ...state,
        count: action.payload
      }

    default:
      return state
  }
}
