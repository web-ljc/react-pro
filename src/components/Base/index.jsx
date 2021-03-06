import React, {Component, useState, useEffect} from "react";
import PubSub from 'pubsub-js'

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <A />
        <B />
      </div>
    )
  }
}

function A() {
  const [data, setData] = useState({name: 'zs', age: 12})
  function changeFn() {
    PubSub.publish('query', data)
  }
  return (
    <>
      <h1>aa</h1>
      <button onClick={changeFn}>点击</button>
    </>
  )
}

function B() {
  const [obj, setObj] = useState({})
  useEffect(() => {
    PubSub.subscribe('query', (_, data) => {
      let obj2 = data
      setObj(val => obj2)
    })
  }, [])

  return (
    <h1>bbb {obj.name}</h1>
  )
}

/*
  ### 通信组件方式总结
    - 组件间关系
      - 父子组件
      - 兄弟组件 / 非嵌套组件
      - 祖孙组件 / 跨级组件

    - 几种通信方式
      - props
        + children props
        + render props
      - 消息订阅-发布
        - pubs-sub等
      - 集中式管理
        - redux、mobx等
      - conText
        - 生产者-消费者模式
    
    - 比较好的搭配
      - 父子组件 props
      - 兄弟组件 消息订阅-发布、集中管理·
      - 子孙组件 消息订阅-发布、集中式管理、conText(开发用的少，封装组件用的多)
*/