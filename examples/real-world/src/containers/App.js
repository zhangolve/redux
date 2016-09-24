import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'
/*
connect就是将store中的必要数据作为props传递给React组件来render，
并包装action creator用于在响应用户操作时dispatch一个action。


*/
class App extends Component {
  static propTypes = {
    // Injected by React Redux 属性类型的判断。
    errorMessage: PropTypes.string,  //字符串类型
    resetErrorMessage: PropTypes.func.isRequired,  //重置错误函数不能为空
    inputValue: PropTypes.string.isRequired,       //字符串类型
    // Injected by React Router
    children: PropTypes.number
  }
/*
   children: PropTypes.node
// Anything that can be rendered: numbers, strings, elements or an array
    // containing these types.也就是说node包括着大范围的类型
*/
  handleDismissClick(e) {
    return (
    this.props.resetErrorMessage(),
    e.preventDefault()
  )
  }
  //这里我对箭头函数做了改写。

  handleChange = nextValue => {
    browserHistory.push(`/${nextValue}`)
   //browserHistory.push(`/china`) 实测只改变这一行时，输入框输入任意字符回车之后地址栏'/china'，但输入框内也被迫添加了china，原文本消失
/*nextValue应该就是输入框中的值*/
  }

  //用于改变url，对原有的history进行push，但这里要注意push进去的也是一个变量。

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }
  /*
  这部分是当出现错误的时候出现一列。显示Dismiss
 <b>{errorMessage}</b>
 春天来了 (Dismiss) ，如果修改<b>春天来了</b>，相应改变

  */

  render() {
    const { children, inputValue } = this.props
    return (
      <div>
        <Explore value={inputValue}
                 onChange={this.handleChange} />

        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

// <hr /><hr> 标签在 HTML 页面中创建一条水平线。 (horizontal rule)水平分隔线,可以在视觉上将文档分隔成各个部分
//渲染了explore组件,children组件以及this.renderErrorMessage,其中的children暂时还不清楚用法。
const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)

/*
最后输出的是
connect就是将store中的必要数据作为props传递给React组件来render，
并包装action creator用于在响应用户操作时dispatch一个action。


*/