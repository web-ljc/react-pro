import React, {Component} from "react";

/*
  创建类式组件
  1.React解析组件标签，找到 MyComponent 组件
  2.发现组件是使用类定义的，随后new出该类的实例，并通过`实例`调用原型上的render方法
  3.将render放回的虚拟DOM转为真实DOM，呈现到页面
*/
export default class MyComponent extends Component {
  // 构造器执行1次，初始化
  constructor(props) {
    super(props)
    this.state = {
      isHot: true,
      wind: '大风'
    }
    // 将原型对象中函数，绑定给实例自身添加一个changeWeather，并绑定当前方法的this指向
    this.changeWeather = this.changeWeather.bind(this)
  }
  changeWeather() {
    // changeWeather 放在了 MyComponent 类的原型对象上，供实例使用
    // 通过实例对象调用时，changeWeather的this就是实例，作为了onClick的回调，不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以 changeWeather 中的this为 undefined
    // console.info(this, 9)
    
    // 获取原理的isHot值
    const isHot = this.state.isHot
    // 状态不可直接更改，需要借助内置API，且更新是合并不是替换
    this.setState({isHot: !isHot})
    
  }
  // render调用1+n次，1初始化，n状态更新次数
  render() {
    // render放在哪里？ 放在 MyComponent 的原型对象上，供实例调用
    // render中的this是谁？ MyComponent的实例对象 === MyComponent组件实例对象
    console.info(this)
    const {isHot, wind} = this.state
    return (
      <div>
        <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，今天有{wind}</h1>
        <MyFnComponent />
      </div>
    )
  }
}

// 创建函数式组件
function MyFnComponent() {
  // console.info(this) // this的undefinde，因为babel编译后开启了严格模式
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