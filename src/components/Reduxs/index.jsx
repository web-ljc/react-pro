import React, { Component } from "react";
import { Select, Button } from 'antd';
// 引入store，用于获取redux中保存状态
import store from '../../redux/store';
// 引入 actionCreator，专门用于创建action对象
import { incrementAction, decrementAction, asyncAction } from '../../redux/actions/count';

const { Option } = Select;

export default class Reduxs extends Component{
  state = {
    text: 'React组件获取数据，由action事件，发给store，store将更改事件给reducers加工，reducers处理后将状态返回给store，组件通过getState()获取数据',
    text2: 'redux的三个核心概念：Action Creators、Store、Reducers。',
    text3: `Action Creators: 1动作的对象 2包含2个属性 type标识属性，值为字符串，唯一，必要属性，data：数据类型，值类型任意{type:'name', data:'test'}`,
    text4: `Store。将state、action、reducer联系在一起。如何得到对象？ import {createStore} from 'redux' import reducer from './reducers'`,
    text5: 'Reducers：用于初始化状态，加工状态。加工时根据旧的state和action，产生新的state的纯函数',
    num: 0,
    count: 0
  }
  componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({}) // 改状态就更新渲染
    })
  }
  increment = () => {
    // 本地
    // const { count, num } = this.state
    // this.setState({ count: count + num })

    // redux
    const { num } = this.state
    // store.dispatch({type: 'increment', data: num})
    // action
    store.dispatch(incrementAction(num))
  }
  decrement = () => {
    // const { count, num } = this.state
    // this.setState({ count: count - num })

    // redux
    const { num } = this.state
    // store.dispatch({type: 'decrement', data: num})
    // action
    store.dispatch(decrementAction(num))
  }
  incrementIfOdd = () => {
    // const { count, num } = this.state
    // if (count % 2 !== 0) {
    //   this.setState({ count: count + num })
    // }

    // redux
    const { num } = this.state
    // const count = store.getState()
    const count = store.count
    if (count % 2 !== 0) {
      // store.dispatch({type: 'increment', data: num})
      // action
      store.dispatch(incrementAction(num))
    }
  }
  incrementAsync = () => {
    // const { count, num } = this.state
    // setTimeout(()=> {
    //   this.setState({ count: count + num })
    // }, 500)

    // redux
    const { num } = this.state
    // setTimeout(()=> {
    //   // store.dispatch({type: 'increment', data: num})
    //   // action
    //   store.dispatch(incrementAction(num))
    // }, 500)
    store.dispatch(asyncAction(num, 500))
  }
  handleChange = (val) => {
    this.setState({ num: val*1 })
  }
  render() {
    return (
      <>
        <div>
          <p> {this.state.text}  </p>
          <p> {this.state.text2} </p>
          <p> {this.state.text3} </p>
          <p> {this.state.text4} </p>
          <p> {this.state.text5} </p>
        </div>
        <div>
          {/* <h1>当前求和为：{store.getState()}</h1> */}
          <h1>当前求和为：{store.count}</h1>
        <Select ref={c => this.selectNum = c} onChange={this.handleChange} style={{ width: 120 }}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <Button onClick={this.increment}>加</Button>
        <Button onClick={this.decrement}>减</Button>
        <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
        <Button onClick={this.incrementAsync}>异步加</Button>
        </div>
      </>
    )
  }
}