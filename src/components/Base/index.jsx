import React, {Component} from "react";

export default class Promise extends Component{
  render() {
    return (
      <div>
        promise
        <MyFnComponent />
      </div>
    )
  }
}

function MyFnComponent() {
  console.info(this) // this的undefinde，因为babel编译后开启了严格模式
  return (
    <>
      <div>
        函数式组件
      </div>
    </>
  )
}
/* 
  ### 关于虚拟DOM：
    1、本质是Object类型的对象
    2、虚拟DOM比较轻，属性比较少
    3、虚拟DOM最终会被react转换为zhenshiDOM
  JSX：javascript + XML
  ### JSX语法规则：
    1、定义虚拟ODM时，不要写引号
    2、标签中混入`JS表达式`时要用{}
    3、样式的类名执行不要用class，改成className
    4、内连样式 style={{key: value}}
    5、只有一个根标签
    6、标签必须闭合
    7、标签首字母
      1.小写开头，将标签转为html中同名元素，html中无该标签对应的同名元素，则报错
      2.开头首字母大写，react渲染对应组件，若组件没有定义报错
  ### 注意区分【JS语句】和【JS表达式】
    1、表达式：一个表达式会产生一个值，可以用变量接到，可以放在任何一个需要的地方
        - a
        - a+b
        - demo(1)
        - arr.map()
        - function test() {}
    2、语句（代码）：
        - if() {}
        - for() {}
        - switch() {}
  ### 模块&组件
    - 模块就是提供特定功能的js程序
    - 组件就是实现局部功能效果的代码和资源的集合
  
  
  ### 函数式组件
  ### 类式组件

*/