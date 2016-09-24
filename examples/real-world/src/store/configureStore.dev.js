import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
//import DevTools from '../containers/DevTools'
//rootReducer用于生成新的状态，这里从reducers这个文件夹调用了rootReducers这个api
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api)
      
    )
  )
//applyMiddleware(thunk, api, createLogger()),
//DevTools.instrument()
//做出上面的改动之后，原来在页面上的reduxdevtools就去掉了。
//这时候载入了createLogger这个组件以及用到了自己写的DevTools。
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
