/**
 * redux插件，用于管理多个组件中共享数据状态
 * redux-thunk，用于acitons异步方法实现
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))
