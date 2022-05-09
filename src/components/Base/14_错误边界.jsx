import React, {Component} from "react";

export default class MyComponent extends Component {
  state = {
    carName: '奔驰',
    hasError:  ''
  }

  static getDerivedStateFromError(error) {
    console.info(error)
    return {hasError: error}
  }

  componentDidCatch() {
    console.info('此处统计错误，反馈给服务器')
  }
 
  render() {
    const {carName, hasError} = this.state
    return (
      <div>
        <h2>我是父组件A</h2>
        <h4>我的车名字是：{carName}</h4>
        { hasError ? '发生错误' : <Son />}
      </div>
    )
  }
}

function Son(props) {
  return (
    <>
      <h2>我是子组件B:</h2>
    </>
  )
}

/*
  ### 错误边界
    - 错误边界，用来补货后代组件错误，渲染出备用页面
    - 特点
      - 只能捕获后代组件声明周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    - 使用方式
      - getDerivedStateFromError / componentDidCatch
      static getDerivedStateFromError(error) {
        console.info(error)
        return {hasError: error}
      }
      componentDidCatch(error, info) {
        // 统计信息，发送给后台
        console.info(error, info)
      }
*/