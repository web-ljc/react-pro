import React, {Component} from "react";
import { Button } from 'antd'
export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <SonComponent />
        {/* <Login /> */}
        {/* <Login2 /> */}
        <Login3 />
      </div>
    )
  }
}


/* 
  ### React中事件处理

  1.通过onXxx属性指定事件处理函数（注意大小写）    
    a.React 使用的是自定义（合成）事件，而不是使用的原生DOM事件 --- 为了更好的兼容性
    b.React 中的事件是通过事件委托方式处理的（委托给组件最外层的元素） --- 为了高效 ？？？？
  2.通过event.target得到发生事件的DOM元素。 --- 不要过度使用ref
*/
class SonComponent extends Component {
  showData = () => {
    // ref获取的是真实DOM
    console.info(this.input1.value)
  }
  showData2 = (event) => {
    console.info(event.target.value)
  }

  render() {
    return (
      <div>
        <input ref={c => this.input1 = c} type="text" placeholder="点击按钮提示数据" />
        <Button ref={c => this.btn1 = c} onClick={this.showData}>点击按钮</Button>
        <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    )
  }
}

/* 
  非受控组件
    - 现用现取，使用的时候取出来
*/
class Login extends Component{
  handleSubmit = (event) => {
    event.preventDefault() // 阻止表单提交
    const {input1} = this
    console.info(input1.value, 99)
  }
  render() {
    return (
      <form action="/Base" onSubmit={this.handleSubmit}>
        用户名：<input ref={c => this.input1 = c} type="text" name="username" />
        用户名：<input type="text" name="password" />
        <button>登录</button>
      </form>
    )
  }
}

/* 
  受控组件
    - 数据可维护到状态里，直接从状态里获取数据
*/
class Login2 extends Component{
  state = {
    username: '',
    password: ''
  }

  saveUsername = (event) => {
    this.setState({username: event.target.value})
  }
  savePassword = (event) => {
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault() // 阻止表单提交
    const {username, password} = this
    console.info(`输入的账号是${username}，输入的密码是${password}`)
  }

  render() {
    return (
      <form action="/Base" onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveUsername} type="text" name="username" />
        用户名：<input onChange={this.savePassword} type="text" name="password" />
        <button>登录</button>
      </form>
    )
  }
}

/* 
  高阶函数
    一个函数符合下面2个规范中的任何一个，那么该函数就是高阶函数
    1,若A函数，接收的参数是一个函数，那么A就可以称为高阶函数
    2，若A函数，调用的返回值是一个函数，那么A就可以称为高阶函数
    常见高阶函数：Promise、setTimeout、 arr.map() 等
  
  函数的科里化：通过函数调用继续返回函数的方式，实现多接收参数，最后统一处理的函数编码形式
*/
class Login3 extends Component{
  state = {
    username: '',
    password: ''
  }

  // 有点像闭包
  saveFormData = (dataType) => {
    return (event) => {
      this.setState({[dataType]: event.target.value})
      console.info(this.state)
    }
  }

  saveUsername = (dataType, event) => {
    this.setState({[dataType]: event.target.value})
    console.info(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault() // 阻止表单提交
    const {username, password} = this
    console.info(`输入的账号是${username}，输入的密码是${password}`)
  }

  render() {
    return (
      <form action="/Base" onSubmit={this.handleSubmit}>
        用户名：<input onChange={event => this.saveUsername('username', event)} type="text" name="username" />
        密码<input onChange={this.saveFormData('password')} type="text" name="password" />
        <button>登录</button>
      </form>
    )
  }
}