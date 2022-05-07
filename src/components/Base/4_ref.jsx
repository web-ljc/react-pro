import React, {Component} from "react";
import { Button } from 'antd'
export default class MyComponent extends Component {
  render() {
    return (
      <div>
        {/* <SonComponent /> */}
        {/* <SonComponent2 /> */}
        <SonComponent3 />
      </div>
    )
  }
}

// 1、直接通过this.refs.input1去使用
class SonComponent extends Component {

  showData = () => {
    // ref获取的是真实DOM
    const { input1 } = this.refs
    console.info(input1.value)
  }
  showData2 = () => {
    const { input2 } = this.refs
    console.info(input2.value)
  }

  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
        <Button ref="btn1" onClick={this.showData}>点击按钮</Button>
        <input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

// 2、通过回调形式获取
// ref={c => this.input1 = c}
class SonComponent2 extends Component {

  state = {isHot: true}

  showData = () => {
    // ref获取的是真实DOM
    console.info(this.input1.value)
  }
  changeWeather = () => {
    const {isHot} = this.state
    this.setState({isHot: !isHot})
  }
  // class的绑定函数
  saveInput = (c) => {
    this.input1 = c;
    console.info(c)
  }

  render() {
    const {isHot} = this.state
    return (
      <div>
        <h1>今天天气很{isHot? '炎热':'凉爽'}</h1>
        {/* 内连 */}
        {/* <input ref={c => {this.input1 = c; console.info(c)}} type="text" placeholder="点击按钮提示数据" /> */}
        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据" />
        <Button ref="btn1" onClick={this.showData}>点击按钮</Button>
        <Button onClick={this.changeWeather}>切换天气</Button>
      </div>
    )
  }
}

// 3、createRef
class SonComponent3 extends Component {
  // React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点
  myRef = React.createRef()
  myRef2 = React.createRef()

  showData = () => {
    // ref获取的是真实DOM
    console.info(this.myRef2)
    console.info(this.myRef.current.value)
  }

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
        <Button ref={this.myRef2} onClick={this.showData}>点击按钮</Button>
      </div>
    )
  }
}