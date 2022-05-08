import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

// 函数组件
export default function Hook(params){
  const [num, setNum] = useState(0)

  const myRef = useRef()


  // useEffect,后边不加[]监听所有数据，加了[]会监听数组里边的数据，如果[]中没有数据就都不监听
  useEffect(() => {
    // componentDidMount, componentDidUpdate
    console.info('@num')
  }, [num])
  useEffect(() => {
    // componentDidMount
    console.info('didMount')
    let timer = setInterval(() => {
      setNum(count => count+1)
    }, 1000)
    return () => {
      // componentWillUnmount
      clearInterval(timer)
    }
  }, [])
  
  function add() {
    // setNum(num+1) // 第一种写法
    setNum(num => num +1)
  }

  function unmount() {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    console.info(myRef.current.innerHTML)
  }
  
  return (
    <div>
      <h2 ref={myRef}>当前和为：{num}</h2>
      <button onClick={add}>点击</button>
      <button onClick={unmount}>提示</button>
    </div>
  )
}


/* 
  ## Hooks是什么
    - Hook是React新特性/新语法
    - 可以让函数组件中使用state以及其他的React特性
  
  ## 三个常用Hook
    - State Hook
    - Effect Hook
    - Ref Hook

  ## State Hook
    - State Hook让组件也可以有state状态，并进行状态数据的读写操作
    - 语法： const [xxx, setXxx] = useState(initValue)
    - useState()说明
      - 参数：第一次初始化指定的值在内部作缓存
      - 返回值：返回2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
    - setXxx() 2种写法
      - setXxx(newValue) 参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
      - setXxx(value => newValue) 参数为函数，接收原本的状态值，返回新的状态值，内部勇气覆盖原来的状态值

  ## Effect Hook
    - Effect Hook 可以在函数组件中执行副作用操作（模拟类组件中的生命周期钩子）
    - 副作用操作
      + 发送ajax请求
      + 设置订阅 / 启动定时器
      + 手动更改操作
    - 语法：   
      useEffect(() => {
        // 在此可以执行任何带副作用操作
        return () => { // 组件卸载前执行
          // 在此做一些收尾工作，比如清楚定时器 / 取消订阅等
        }
      }, [stateValue]) // 如果指定的是[]，回调函数只会在一次render()后执行
    - 可以看做三个函数的组合
      - componentDidMount()
      - componentDidUpdate()
      - componentWillUnmount()
  
  ## Ref Hook
      - Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其它数组
      - 语法：const refContainer = useRef()
      - 作用：保存标签对象，功能与React.createRef() 一样
*/