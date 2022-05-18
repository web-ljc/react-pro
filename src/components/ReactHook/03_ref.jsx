import React, {Component, createRef, useRef, forwardRef} from 'react'

export default function FnRef() {
  const MyFooRef = createRef()
  const myRef = useRef()
  const onClick = () => {
    console.info(myRef) // {current: input} 对象的current对应input的DOM元素
    console.info(MyFooRef) // {current: MyFoo} 对象的current对应MyFoo的实例
    myRef.current.focus()
  }
  return (
    <>
      <MyFoo ref={MyFooRef} />
      <Foo ref={myRef} />
      <button onClick={onClick}>父组件</button>
    </>
  )
}

// 使用forwardRef包裹组件
const Foo = forwardRef((props, inputRef) => {
  // const inputRef = useRef()
  const onClick = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>聚焦</button>
    </div>
  )
})

class MyFoo extends Component{
  handleClick = () => {
    console.info(3)
  }
  render() {
    return (
      <>
        <div>234</div>
      </>
    )
  }
}


/* 
  使用forwardRef包裹函数组件，转发ref
    - 函数组件入参(props, ref)
    - ref 是使用组件时定义的ref
  在函数组件内可以直接使用父级 ref
*/