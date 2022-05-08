import React, {Component} from "react";
export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <ShowText />
      </div>
    )
  }
}

// 生命周期钩子函数 == 生命周期函数 == 生命周期钩子
class ShowText extends Component{
  constructor() {
    super()
    console.info('1、constructor')
  }
  state = {
    opacity: 1
  }

  // 有点像闭包
  showTxt = () => {
    clearInterval(this.timer)
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  // 组件挂载完毕
  componentDidMount() {
    console.info('3、didMount')
    this.timer = setInterval(() => {
      let {opacity} = this.state
      opacity -= 0.1
      if(opacity <= 0) opacity = 1
      this.setState({opacity})
    }, 200)
  }

  // 组件将要卸载
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.timer)
  }

  // render调用时机：初始化渲染，状态更新之后
  render() {
    console.info('2、reder')
    return (
      <div>
        <h2 style={{opacity: this.state.opacity}}>学习React</h2>
        <button onClick={this.showTxt}>开始吧</button>
      </div>
    )
  }
}
