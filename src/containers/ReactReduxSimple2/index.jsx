
import React, { Component } from "react";
import { Select, Button } from 'antd';
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { decrementAction, incrementAction, asyncAction } from '../../redux/actions/count'

const { Option } = Select;

// 定义UI组件
class Reduxs extends Component{
  state = {
    text: 'React-redux。容器组件和UI组件整合为一个',
    text1: 'React-redux',
    text2: 'React-redux',
    text3: 'React-redux',
    text4: 'React-redux',
    text5: 'React-redux',
    num: 0,
  }
  componentDidMount() {
  }
  increment = () => {
    const { num } = this.state
    this.props.add(num)
  }
  decrement = () => {
    const { num } = this.state
    this.props.delete(num)
  }
  incrementIfOdd = () => {
    const { num } = this.state
    if (this.props.count % 2 !== 0) {
      this.props.add(num)
    }
  }
  incrementAsync = () => {
    const { num } = this.state
    this.props.addAsync(num, 500)
  }
  handleChange = (val) => {
    this.setState({ num: val*1 })
  }
  render() {
    return (
      <>
        <h2>React-Redux组件</h2>
        <div>
          <p> {this.state.text}  </p>
          <p> {this.state.text2} </p>
          <p> {this.state.text3} </p>
          <p> {this.state.text4} </p>
          <p> {this.state.text5} </p>
        </div>
        <div>
          <h1>当前求和为：{this.props.count}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.count}),
  {
    add: incrementAction,
    delete: decrementAction,
    addAsync: asyncAction,
  }
)(Reduxs)
