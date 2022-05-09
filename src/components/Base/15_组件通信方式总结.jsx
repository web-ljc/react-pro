import React, {Component} from "react";

export default class MyComponent extends Component {
  state = {
    carName: '奔驰',
  }
  render() {
    const {carName, hasError} = this.state
    return (
      <div>
        <h2>我是父组件A</h2>
        <h4>我的车名字是：{carName}</h4>
      </div>
    )
  }
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
      - 兄弟组件 消息订阅-发布、集中管理
      - 子孙组件 消息订阅-发布、集中式管理、conText(开发用的少，封装组件用的多)
*/