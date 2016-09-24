import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'

export default <Route path="/" component={App}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>
 /*
由Root 组件返回的是这个组件。这个组件的作用是进行路由。并没有默认路由 IndexRoute 
Route中打开页面是'/'，加载的是App组件，然后有两个子路由，以参数方式展示。


 */