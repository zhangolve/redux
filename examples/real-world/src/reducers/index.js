import * as ActionTypes from '../actions'
//表示被加载模块被整体引入，*就是整体的意思，从actions这个文件夹被引入，引入后的名称叫做Actiontypes
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
//./是同级目录下的文件或文件夹，../则是上一级目录下的文件或文件夹。
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

//更新
// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.STARRED_REQUEST,
      ActionTypes.STARRED_SUCCESS,
      ActionTypes.STARRED_FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionTypes.STARGAZERS_REQUEST,
      ActionTypes.STARGAZERS_SUCCESS,
      ActionTypes.STARGAZERS_FAILURE
    ]
  })
})

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  routing
})

export default rootReducer
/*

我们可以看到，这里输出的是rootReducer，他在store/configureStore.DEV.JS这个文件中被引入
reducer 的作用是接收新的状态值与旧的状态值做对比，返回新的状态。
*/