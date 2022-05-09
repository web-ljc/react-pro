import React, {Component, useContext} from "react";

// 1定义createContext
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

export default class MyComponent extends Component {
  state = {username: 'tom', age: 12}

  render() {
    const {username, age} = this.state
    console.info(this)
    return (
      <div>
        <h2>我是父组件A</h2>
        <h4>我的用户名字是：{username}</h4>
        {/* 2用标签包裹 */}
        <Provider value={{username, age}}>
          <Son username={username} />
        </Provider>
      </div>
    )
  }
}

function Son(props) {
  return (
    <>
      <h2>我是子组件B</h2>
      <h4>我的用户名字是：{props.username}</h4>
      <GrandSon />
    </>
  )
}

// class GrandSon extends Component {
//   // 3声明接收context
//   static contextType = MyContext
//   render() {
//     // 4从context读取数据
//     const {username, age} = this.context
//     return (
//       <>
//         <h2>我是孙组件C</h2>
//         <h4>我的用户名字是：{username}</h4>
//         <h4>我的年龄是：{age}</h4>
//       </>
//     )
//   }
// }

function GrandSon() {
  return (
    <>
      <h2>我是孙组件C</h2>
      <h4>我的用户名字是：
        <Consumer>
          { value => `${value.name},我的年龄是：${value.age}` }
        </Consumer>
      </h4>
    </>
  )
}

// function GrandSon() {
//   // 函数式组件接收 content 需要使用 useContext 方法
//   const {username, age} = useContext(MyContext)
//   return (
//     <>
//       <h2>我是孙组件C</h2>
//       <h4>我的用户名字是：{username}</h4>
//       <h4>我的年龄是：{age}</h4>
//     </>
//   )
// }


/*
  ### Context
    - 一种组件间通信方式，常用于【祖祖件】与【后代组件】间通信
  
  使用：
    1. 创建Context容器对象
      - const XxContext = React.createContext()

    2. 渲染子组件时，外面包裹xxxContext.Provider,通过value属性给后代组件传递数据
      <XxContext.Provider value={data}>
        子组件
      </XxContext.Provider>
    
    3.后代组件读取数据
      - 1、仅适用于类组件
        static contextType = XxContext  // 声明接收context
        this.context // 读取context中的value数据
      
      - 2、函数组件和类组件都可用
        <XxContext.Consumer>
          {
            value => ( // value就是context中的value数据
              要现实的内容
            )
          }
        </XxContext.Consumer>
      
      - 3、函数组件使用hook
          const {name, age} = useContext(XxContext)
  
*/