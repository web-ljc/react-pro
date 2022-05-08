import React, {Component} from "react";

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        1
      </div>
    )
  }
}

/*
  经典面试题：
    1.react/vue中的key有什么作用（key的内部原理是什么？）
    2.为什么遍历列表时，key最好不要用index
    
    1.虚拟DOM中key的作用：
      - 简单说：key时虚拟DOM对象的标识，在更新显示时key起着重要作用
      - 详细说：当状态中的数据发生变化时，react会根据`新数据`生成新的虚拟DOM，随后React进行新虚拟DOM和旧虚拟DOM的diff比较
        - 虚拟DOM中找到了与新虚拟DOM相同的key
          - 若虚拟DOM中内容没有变化，直接使用之前的真实DOM
          - 若虚拟DOM中内容变化了，生成新的真实DOM，随后替换掉页面之前的真实DOM
        - 虚拟DOM中没有找到与新虚拟DOM相同的key
          - 根据数据创建新的真实DOM，随后渲染到页面
    2.用index作为key可能会引发的问题
      - 若对数据进行，逆序添加、逆序删除等破坏顺序的操作：
          会产生没必要的真实DOM更新
      - 如果结构中还包含输入类的DOM
          会产生错误DOM更新
      - 不对数据进行破坏顺序的操作，只用于渲染列表用于展示，可以使用index作为key

*/