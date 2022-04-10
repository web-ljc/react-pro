/**
 * 该文件专门为Count组建生成action对象
 * 1.object类型一般对象 同步函数
 * 2.function类型，异步函数
 */
import {INCREMENT, DECREMENT} from '../constant'

// 同步action，指action的值为Object类型的一般对象
export const incrementAction = (data) => ({type: INCREMENT, data})
export const decrementAction = (data) => ({type: DECREMENT, data})

/**
 * 1.明确延迟的动作不想交给组件自身，想交给action
 * 2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
 * 3.具体编码
 *       a。yarn add redux-thunk 并配置在store中
 *       b。创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
 *       c。异步任务有结果后，分发一个同步的aciton去真正操作数据
 * 4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果再去分发同步action
 */
// 异步action，指action的值为函数。异步action中一般会调用同步action，异步action不是必要的
export const asyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time)
  }
}