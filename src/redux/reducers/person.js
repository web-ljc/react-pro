import {ADD_PERSON} from '../constant'

const initData = [{id:0, name:'莉丝'}]

export default function personReducer(perState=initData, action) {
  const {type, data} = action
  switch(type) {
    case ADD_PERSON:
      return [data, ...perState]
    default:
      return perState
  }
}