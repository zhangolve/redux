if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod')
} else {
  module.exports = require('./Root.dev')
}

/*
root组件内容在上面。
通过NODE_ENV可以来设置环境变量（默认值为development）。 一般我们通过检查这个值来分别对开发环境和生产环境下做不同的处理。可以在命令行中通过下面的方式设置这个值：

linux & mac: export NODE_ENV=production
windows:set NODE_ENV=production
比方说如果代码中要对生产环境下做一些处理，可以这样写：

if (process.env.NODE_ENV === 'production') {
 // just for production code
}
生产环境：是值正式提供对外服务的，一般会关掉错误报告，打开错误日志
*/
