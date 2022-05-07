import React, { useState, useEffect } from 'react'

// 函数组件
export default function Hook(params){
  const [state, setState] = useState({type: 'add', count: 0, isShow: true})
  const addCount = () => {
    // setCount(count + 1) // setCount是异步去更新最新的值
    // setCount((count) => count + 1)
    // console.info(count, 'in') // 会先显示count，再执行setCount
    // setState({type: 'add', count: 1})
    setState((prevState) => {
      if (prevState.type === 'add') {
        return {
          ...prevState,
          count: prevState.count + 1,
          isShow: !prevState.isShow
        }
      }
    })
  }
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.info('useEffect', state) // 更改state状态，会重新执行，显示最新的值
  })

  return(
    <div>
      <div>{state.count}</div>
      <button onClick={() => addCount()}>add</button>
      { state.isShow ? <HookCon /> : '' }
    </div>
  )
}

// 测试Effect Hook功能
function HookCon(params) {
  const [name, setName] = useState('JD')
  useEffect(() => {
    console.info('componentDidMount、componentDidUpdate', name)
    return () => {
      console.info('componentWillUnmount', name)
    }
  })
  return(
    <div>
      {name}
    </div>
  )
}