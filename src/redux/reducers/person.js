import {ADD_PERSON} from '../constant'

const initData = [{id:0, name:'莉丝'}]

export default function personReducer(perState=initData, action) {
  const {type, data} = action
  switch(type) {
    case ADD_PERSON:
      // perState.unshift(data) // 此处不能这样写，会导致perState被改写。就不是纯函数不能识别状态被改变
      return [data, ...perState]
    default:
      return perState
  }
}