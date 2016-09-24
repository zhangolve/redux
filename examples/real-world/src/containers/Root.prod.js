import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'

const Root = function ({ store, history }) { 

	return (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)}
//注意这里的函数内部的{store,history}
//这里的routes是一个组件，渲染的是他。

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
//  // 以后任意类型加上 `isRequired` 来使 prop 不可空。
   // requiredFunc: React.PropTypes.func.isRequired,在这里是说这两个属性都是不可为空，不能没有的。
/*
生产环境下的Root ，
provider ：它的工作很简单，就是接受Redux的store作为props，并将其声明为context的属性之一，子组件可以在声明了contextTypes之后可以方便的通过this.context.store访问到store。不过我们的组件通常不需要这么做，将store放在context里，是为了给下面的connect用的。
*/