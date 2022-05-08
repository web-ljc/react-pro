import React, {Component} from "react";

export default class MyComponent extends Component {
  state = {count: 0}

  add = () => {
    // ---- 对象式 -----
    // const {count} = this.state
    // // 更新状态，异步的
    // this.setState({count: count+1}, () => {
    //   console.info(this.state.count)
    // })
    // console.info(this.state.count) // 0

    // 函数式
    this.setState(state => ({count: state.count+1}))
  }
  render() {
    return (
      <div>
        <h1>当前和为：{this.state.count}</h1>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}

/*
  ### setState更新状态2种写法
  
  // 对象式的setState
  1.setState(stateChange, [callback])
    - stateChange为状态改变对象（该对象可以体现出状态的改变）
    - callback是可选回调函数，它在状态更新完毕、界面更新后才被调用
  
  // 函数式的setState
  2.setState(updater, [callback]) 
    - updater为返回stateChange对象的函数
    - updater可以接收到state 和 props
    - callback是可选的回调函数，它在状态更新、界面也更新后才被调用

  总结：
    1. 对象式 setState 是函数式的 setState 的简写方式
    2. 使用原则：
      - 如果新状态不依赖于原状态，使用对象方式
      - 如果新状态依赖于原状态，使用函数方式
      - 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取
*/