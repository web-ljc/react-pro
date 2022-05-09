import React, {Component, PureComponent} from "react";

export default class MyComponent extends PureComponent {
  state = {carName: '奔驰'}

  render() {
    const {carName} = this.state
    console.info(this)
    return (
      <div>
        <h2>我是父组件A</h2>
        <h4>我的车名字是：{carName}</h4>
        {/* <Son>
          <Grand />
        </Son> */}
        <Son render={(name) => <Grand name={name} /> } />
      </div>
    )
  }
}

// class Son extends Component{
//   render() {
//     console.info(this)
//     return (
//       <>
//         <h2>我是子组件B</h2>
//         <h4>我的车名字是：{}</h4>
//       </>
//     )
//   }
// }

function Son(props) {
  console.info(props, 9)
  return (
    <>
      <h2>我是子组件B</h2>
      {/* <h4>我的车名字是：{props.children}</h4> */}
      {props.render('tom')}
    </>
  )
}

function Grand(props) {
  return (
    <>
      <h2>我是子组件C,名字是{props.name}</h2>
    </>
  )
}


/*
  ### render props
    #### 如何想组件内部动态传入带内容的结构？
      - vue中
        使用solt技术，通过组件标签体传入结构 <A> <B/> </A> 
      - React中
        使用children props 通过组件标签传入结构
        使用render props 通过组件属性标签传入结构，一般用render函数属性

      #### children props
      <A>
        <B />
      </A>
      {this.props.children}
      // 如果B组件获取A组件内的数据，获取不到
    
      #### render props
      <A render={data => <C data={data} />}></A>
      A组件： {this.props.render(内部data)}
      B组件：读取A组件传入的数据，props.data
  
*/