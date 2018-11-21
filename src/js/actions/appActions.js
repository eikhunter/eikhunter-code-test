export const CHANGE_TEXT = 'CHANGE_TEXT'
export const UPDATE_COUNTER = 'UPDATE_COUNTER'

export const checkFizzBuzz = (count) => {
  return function (dispatch) {
    if (count % 15 === 0) {
      dispatch(changeText('BeautyStack'))
    } else if (count % 5 === 0) {
      dispatch(changeText('Stack'))
    } else if (count % 3 === 0) {
      dispatch(changeText('Beauty'))
    } else {
      dispatch(changeText(''))
    }
  }
}

export const incrementCounter = (count) => {
  return function (dispatch) {
    if (count < 100) {
      dispatch(updateCounter(++ count))
      dispatch(checkFizzBuzz(count))
    }
  }
}

export const changeText = text => ({
  type: CHANGE_TEXT,
  payload: text
})

export const updateCounter = count => ({
  type: UPDATE_COUNTER,
  payload: count
})
