import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
//import DevTools from '../containers/DevTools'
//rootReducer用于生成新的状态，这里从reducers这个文件夹调用了rootReducers这个api
//这里需要注意，当我们把import DevTools from '../containers/DevTools' 注释掉之后，发现
//start之后，发现chrome控制台提示了
//createDevTools.js:57 Redux DevTools could not render. Did you forget to include DevTools.instrument() in your store enhancer chain before using createStore()?
//找到对应的文件位置，会发现有
/*

 if (!_this.liftedStore) {
        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
      }
      return _this;
这样的代码，这也说明，在编写一个module的时候，不仅要考虑功能性，还要考虑使用者的可维护性，要让使用者能够发现错误，查找错误。

*/
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
