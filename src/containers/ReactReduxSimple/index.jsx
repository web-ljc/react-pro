// 引入Count的ui组件
import ReactReduxsUI from '../../components/ReactReduxs'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import { decrementAction, incrementAction, asyncAction } from '../../redux/actions/count'


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.count}),
  // 一般写法，传统函数
  // dispatch => ({
  //   add:(data) => dispatch(incrementAction(data)),
  //   delete:(data) => dispatch(decrementAction(data)),
  //   addAsync:(data, time) => dispatch(asyncAction(data, time))
  // })
  // mapDispatchToProps简写,传对象
  {
    add: incrementAction,
    delete: decrementAction,
    addAsync: asyncAction,
  }
)(ReactReduxsUI)
