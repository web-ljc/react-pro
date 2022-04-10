// 引入Count的ui组件
import ReactReduxsUI from '../../components/ReactReduxs'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { decrementAction, incrementAction, asyncAction } from '../../redux/actions/count'

// mapStateToProps函数的返回对象
// 返回对象中的key就作为传递给UI组件props的key: value --状态
// mapStateToProps用于传递状态
const mapStateToProps = (state) => {
  return {count: state.count}
}
// mapDispatchToProps函数返回对象
// 返回对象中的key就作为传递给UI组件props的key: value --操作状态的方法
// mapDispatchToProps用于传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    // 通知redux执行加法
    add:(data) => dispatch(incrementAction(data)),
    delete:(data) => dispatch(decrementAction(data)),
    addAsync:(data, time) => dispatch(asyncAction(data, time))
  }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxsUI)
