/**
 * 1.该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接到2个参数，分别为之前的状态 preState，动作对象 cation
 */
import {INCREMENT, DECREMENT} from './constant'

const initData = 0
export default function countReducer(preState = initData, action) {
  console.info(preState, action)
  // 从action对象中获取 type、data
  const {type, data} = action
  switch(type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}