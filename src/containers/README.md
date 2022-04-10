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

## react-redux开发者工具
* yarn add redux-devtools-extension
* .store中进行配置
```
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
```
## react-redux项目优化简写
* 所有变量名字要规范，尽量出发对象的简写形式
* .reducers文件夹中，编写index.js专门用户汇总并暴露所有的reducer
```


## 纯函数和高阶函数
#### 纯函数
* 一类特别的函数：只要是同样的输入，必定得到同样的输出
* 必须遵守以下约束
  * 不得改写参数数据
  * 不会产生任何副作用，例如网络请求，输入和输出设备
  * 不能调用Date.now() 或者 Math.random()等不纯的方法
* redux的reducer函数必须是一个纯函数
```
redux更改对象中的数据，需要重新替换对象。只对对象中的字段更改不会出发比较
```
#### 高阶函数
* 一类特别的函数
  * 1 参数是函数
  * 2 返回值是函数
* 常见高阶函数
  * 定时器设置函数
  * 数组的forEach()/map()/filter()/find()/bind()
  * promise
