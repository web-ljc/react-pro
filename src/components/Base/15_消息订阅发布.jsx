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
  ### 消息订阅-发布
    - import PubSub from 'pubsub-js'

    - 发布消息
      - PubSub.publish('query', data)

    - 订阅消息
      PubSub.subscribe('query', (_, data) => {
        console.info(data)
      })
  
*/