export const loading = (bool) => {
  return {
    type: 'LOADING_ACTION',
    bool
  }
}

export const setMenu = bool => ({
  type: 'MENU_STATE',
  bool
})

export const error = (text) => {
  return (dispatch) => {
      dispatch(ErrorMessage(text, true))

      window.setTimeout(() => {
          dispatch(ErrorMessage('', false))
      }, 4000)
  }
}

const ErrorMessage = (text, open) => {
  return {
      type: 'ERROR_ACTION',
      text,
      open
  }
}

export const message = (text) => {
  return (dispatch) => {
      dispatch(Message(text, true))

      window.setTimeout(() => {
          dispatch(Message('', false))
      }, 4000)
  }
}

const Message = (text, open) => {
  return {
      type: 'MESSAGE_ACTION',
      text,
      open
  }
}

export const baseUrl = "http://localhost:5000"
