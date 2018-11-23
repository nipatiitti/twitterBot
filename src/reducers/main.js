import { combineReducers } from 'redux'
import user from './user'
import utils from './utils'

const main = combineReducers({
  user,
  utils
})

export default main
