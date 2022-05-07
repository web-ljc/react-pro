import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MyComponent extends Component {
  // 不对组件初始化添加指定属性时，将state直接添加到实例上
  state = {
    isHot: true,
    wind: '大风',
    person: {
      name: '张三',
      age: 18
    }
  }

  // 自定义方法，要用赋值语句+箭头函数，this指向到实例
  changeWeather = () => {
    const isHot = this.state.isHot
    this.setState({isHot: !isHot})
  }
  speak = () => {
    console.info('hi')
  }

  render() {
    console.info(this)
    const {isHot, wind, person} = this.state
    return (
      <div>
        <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，今天有{wind}</h1>
        <MyFnComponent />
        {/* <SonComponent name={person.name} age={person.age} /> */}
        <SonComponent {...person} speak={this.speak} />
      </div>
    )
  }
}


// 获取props
class SonComponent extends Component {
  // 构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
  constructor(props) {
    super(props)
    console.info('constructor', this.props)
  }
  // props是只读的，不能进行修改
  render() {
    console.info(this)
    // 获取父级传参
    const {name, age, speak} = this.props
    // 调用方法
    speak()
    return(
      <ul>
        <li>姓名：{name}</li>
        <li>年龄：{age+1}</li>
      </ul>
    )
  }
}
// 入参校验，进行类型、必要性的限制
SonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  speak: PropTypes.func
}
// 指定标签属性默认值
SonComponent.defaultProps = {
  age: 80
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