const initialState = {
  accounts: [],
  tweets: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return Object.assign({}, state, {
        accounts: [...state.accounts, action.account]
      })

    case 'EDIT_ACCOUNT': 
      return Object.assign({}, state, {
        accounts: state.accounts.map(account => account.id === action.id ? action.account : account)
      })

    case 'REMOVE_ACCOUNT': 
      return Object.assign({}, state, {
        accounts: state.accounts.filter(account => account.id !== action.id)
      })

    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}

export default login
