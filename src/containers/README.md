## react-redux
* 所有的UI组件都应该包裹一个容器组件，他们是父子关系
* 容器组件是真正和redux打交道的，里面可以随意的使用redux的api
* UI组件中不能使用任何redux的api
* 容器组件会传给UI组件 1redux中所保存的状态，2用于操作状态的方法
* 备注：容器给UI传递：状态、操作状态的方法，均通过props传递

## react-redux优化
* 容器组件和UI组件整合成一个文件
* 无需自己给容器组件传递store，给<APP />包裹一个<Provider store={store}>即可
* 使用了react-redux后不用再自己检测redux中状态的改变了，容器组件可以完成这个工作
* mapDispatchToProps也可以简单的写成一个对象
* 一个组件要和redux打交道要经过几步？
  * 定义好UI组件，不要暴露
  * 引入connect生成一个容器，并暴露，写法如下：
    ```
      connect(
        state => ({key: value}), // 映射状态
        {key: xxxxAction} // 映射操作状态的方法
      )(UI组件)
    ```
  * 在UI组件中通过this.props.xxxxx读取和操作状态

## react-redux数据共享
* 定义一个Person组件，和Count组件通过redux共享数据
* 为Person组件编写：redux、action，配置constant常量
* 重点Person和reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象
* 交给store的是总reducer，最后注意在组件中取出的状态