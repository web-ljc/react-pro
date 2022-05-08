import React, {Component} from "react";
export default class MyComponent extends Component {
  constructor() {
    super()
    this.state = { isShowText: true, age: 1 }
    console.info('fa----constructor')
  }
  UNSAFE_componentWillMount() {
    console.info('fa----componentWillMount')
  }
  componentDidMount() {
    console.info('fa----componentDidMount')
  }
  shouldComponentUpdate() {
    console.info('Fa----shouldComponentUpdate')
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.info('Fa----componentWillUpdate')
  }
  componentDidUpdate() {
    console.info('Fa----componentDidUpdate')
  }

  changeShow = () => {
    const {isShowText} = this.state
    this.setState({isShowText: !isShowText})
  }
  force = () => {
    this.setState({})
    // this.forceUpdate()
  }

  render() {
    console.info('Fa----render')
    return (
      <div>
        <button onClick={ this.force }>更新父组件</button>
        <button onClick={ this.changeShow }>卸载子组件</button>
        { this.state.isShowText ? <ShowText number={1} /> : '' }
      </div>
    )
  }
}

// 生命周期钩子函数 == 生命周期函数 == 生命周期钩子
class ShowText extends Component{
  // 1、构造器
  constructor() {
    super()
    console.info('Count---constructor')
    // 初始化状态
    this.state = {count: 0}
  }

  // 2、若state的值在任何时候都取决于props，那么可以使用
  static getDerivedStateFromProps(props, state) {
    console.info('Count---getDerivedStateFromPorps')
    // console.info(props, state)
    return null
    // 重写state的值，就不能更改了,使用场景极其低
    // return props
  }

  // 4、组件挂载完毕的钩子
  componentDidMount() {
    console.info('Count---componentDidMount')
  }

  // 5、组件将要卸载的钩子
  componentWillUnmount() {
    console.info('Count---componentWillUnmount22')
  }

  /* 更新数据  ---  setState() */
  //  shouldComponentUpdate--- render --- getSnapshotBeforeUpdate  --- componentDidUpdate
  // 控制组件更新的阀门，
  shouldComponentUpdate() {
    console.info('Count---shouldComponentUpdate222')
    return true
  }

  // 更新前获取快照
  getSnapshotBeforeUpdate() {
    console.info('Count---getSnapshotBeforeUpdate')
    return 333
  }

  // 组件更新完毕的钩子
  componentDidUpdate(prevProps, prevState, snapshotValue) {
    console.info('Count---componentDidUpdate', prevProps, prevState, snapshotValue)
  }


  // 按钮的回调
  add = () => {
    const {count} = this.state
    this.setState({count: count+1})
  }
  // 强制更新  componentWillUpdate --- render --- componentDidUpdate
  force = () => {
    this.forceUpdate()
  }

  // 3、render
  render() {
    console.info('Count---render')
    const {count} = this.state
    return (
      <div>
        <h2>当前求和：{count}</h2>
        <button onClick={this.add}>增加</button>
        <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
      </div>
    )
  }
}


/* 
  ----- react旧生命周期 ----

  1.初始化阶段：由ReactDOM.render()函数触发 -- 初次渲染
    - constructor()
    - componentWillMount()
    - render()
    - componentDidMount()     ===>  常用
      - 一般这个钩子中，做一些初始化的事，例如：开启定时器，发送网络请求，订阅消息
  2.更新阶段,组件内部this.setDate(),this.forceUpdate(),或父组件重新出发render()
    - componentWillReactiveProps() // 父组件render
    - shouldComponentUpdate()      // this.setData()
    - componentWillUpdate()        // this.forceUpdate()
    - render()                ===> 必须使用
    - componentDidUpdate()
  3.卸载组件：
    - componentWillUnmount()  ===> 常用
      - 一般这个钩子中，做一些收尾的事，例如：关闭定时器，取消订阅消息

  ----- react新生命周期 ----
  
  ## 舍弃
    - componentWillmount
    - componentWillReactiveProps
    - componentWillUpdate

  ## 新增
    - getDerivedStateFromProps  // 若state的值在任何时候都取决于props，那么可以使用。  没啥用
    - getSnapshotBeforeUpdate

  1.初始化阶段
    - constructor()
    - getDerivedStateFromProps
    - render()
    - componentDidMount()
  2.更新阶段
    - getDerivedStateFromProps
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate
    - componentDidUpdate()
  3.卸载组件
    - componentWillUnmount()
  
*/