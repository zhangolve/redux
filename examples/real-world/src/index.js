import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

/*
- 在index.html中有id="root" ，这个index文件作为一个入口作为总的渲染。
- browserHistory负责url路由。
- 最后渲染的是Root这个组件。
- store是redux的部分，用于存储组件状态。
-我们来看一下Root这个组件的内容。
*/