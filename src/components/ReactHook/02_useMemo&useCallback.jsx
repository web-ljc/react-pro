import React, {Component, PureComponent, useState, useMemo, useCallback, memo} from 'react'

// 普通传参，函数组件状态没变可以用memo进行优化
const Foo = memo(props => {
  console.info('Foo render')
  return <ul>
    {/* 直接传的静态变量 */}
    {/* { props.count } */}
    {/* 直接传的函数 */}
    {/* {props.render()} */}
    {/* 直接传的模版 */}
    {props.render}
  </ul>
})

// 普通传参，类组件可以用PureComponent优化
// class Foo extends PureComponent{
//   render() {
//     console.info('Foo render')
//     return (
//       <>
//         <ul>
//           { this.props.render() }
//         </ul>
//         <Son count={1} />
//       </>
//     )
//   }
// }

export default function MyUseMemo() {
  const [range, setRange] = useState({min: 0, max: 1000})
  const [count, setCount] = useState(0)

  // useCallback固定的是函数
  // const render = useCallback(params => {
  //   console.info(1)
  //   let list = []
  //   for(let i = 0; i < range.max; i++) {
  //     list.push(<li key={i}>{i}</li>)
  //   }
  //   return list
  // }, [range])
  
  // useMemo
  const render = useMemo(params => {
    console.info(1)
    let list = []
    for(let i = 0; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>)
    }
    return list
  }, [range])

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick= {() => setCount(count+1)}
      >add</button>
      <button
        onClick= {() => setRange({
            ...range,
            max: range.max + 1
          })
        }
      >change</button>
      {/* <Foo count={range.max}></Foo> */}
      <Foo render={render}></Foo>
    </div>
  )
}


/* 

  组件优化
    - 类组件可以用 PureComponent 进行优化
    - 函数组件可以用 memo(fn) 包裹进行优化
  
  组件中优化固定值，Hook
    - 可以使用 useCallback(fn, deps) 固定函数
      - 参数1: fn是要固定的函数
      - 参数2: 不写就是随时渲染， []空数组则不会变化， [p1]跟随p1的变化而渲染
    - 可以使用 useMemo(fn, deps) 固定值，会执行函数并返回值

    - useCallback(fn, deps) === useMemo(() => fn, deps)
*/