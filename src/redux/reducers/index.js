// 该文件用于汇总所有的reducers
// 引入为count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'

export default {
  count,
  persons
}