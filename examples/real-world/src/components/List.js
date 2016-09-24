import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
    nextPageUrl: PropTypes.string
  }
  //初始化各个属性。

  static defaultProps = {
    isFetching: true,
    loadingLabel: 'Loading...'
  }

  renderLoadMore() {
    const { isFetching, onLoadMoreClick } = this.props
    //这里用到了es6的解构数组，转化为可以理解的是isFetching=this.props.isFetching,onLoadMoreClick=this.props.onLoadMoreClick 
    return (
      <button style={{ fontSize: '1.5rem' }}
              onClick={onLoadMoreClick} //onLoadMoreClick是一个函数，在前面已经绑定了this.porps.onLoadMoreClick  
              disabled={isFetching}>      
        {isFetching ? 'Loading...' : 'Load More'}
      </button>
    )
  }
//所以现在这些函数到底是存在哪里呢？
  render() {
    const {
      isFetching, nextPageUrl, pageCount,
      items, renderItem, loadingLabel
    } = this.props

    const isEmpty = items.length === 0
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    const isLastPage = !nextPageUrl
    if (isEmpty && isLastPage) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <div>
        {items.map(renderItem)}
        {pageCount > 0 && !isLastPage && this.renderLoadMore()}
      </div>
    )
  }
}
