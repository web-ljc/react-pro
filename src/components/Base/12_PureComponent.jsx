import React, {PureComponent} from "react";

export default class MyComponent extends PureComponent {
  state = {carName: '奔驰', pers: ['xl', 'zs']}

  changeCar = () => {
    // this.setState({carName: '宝马'})
    const obj = this.state
    obj.carName = '宝马'
    this.setState(obj) // 不会变化，因为 setState 会直接判断对象的引用地址，如果是一个直接，shouldComponentUpdate将直接返回false

    const {pers} = this.state
    pers.unshift('ww')
    this.setState({pers: [...pers]}) // 新的数组
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.info(nextProps, nextState)
  //   console.info(this.props, this.state)
  //   return this.state.carName !== nextState.carName
  // }

  render() {
    const {carName} = this.state
    console.info(this)
    return (
      <div>
        <h2>我是父组件A</h2>
        <h4>我的车名字是：{carName}</h4>
        <button onClick={this.changeCar}>点我换车</button>
        <Son />
      </div>
    )
  }
}

function Son(props) {
  console.info('son-render')
  return (
    <>
      <h2>我是子组件B</h2>
      <h4>我的车名字是：{props.carName}</h4>
    </>
  )
}



/*
  ### 组件优化
    - 只要执行setState() 即使不改变状态数据，组件也会重新render()
    - 只要当前组件重新render()，就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ===> 效率低

    #### 高效率做法
    - 只有当组件的state或props数据发生变化时才重新render()
    
    #### 原因
    - Component中的shouldComponentUpdate()总是返回true
    
    #### 解决
    - 1.重写 shouldComponentUpdate()方法
      比较新旧state或props数据，如果有变化返回true，没有返回false
    - 2.使用PureComponent
      PureComponent重写了shouldComponentUpdate() ，只有state或props数据有变化才会返回true
      注意：
        - 只是进行state和props数据的浅比较，如果只是数据对象内部数据发生变化，返回false
        - 不能直接修改state数据，而是要产生新数据
    - 项目中一般有PureComponent来优化
  
*/