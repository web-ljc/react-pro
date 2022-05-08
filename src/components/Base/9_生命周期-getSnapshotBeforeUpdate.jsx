import React, {Component} from "react";
import css from './index.module.css'

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <ShowText number={1} />
      </div>
    )
  }
}

class ShowText extends Component{
  state = {newArr: []}

  componentDidMount() {
    setInterval(() => {
      const {newArr} = this.state
      const news = '新闻' + (newArr.length+1)
      this.setState({newArr: [news, ...newArr]})
    }, 1000)
  }

  // 更新前获取快照
  getSnapshotBeforeUpdate() {
    return this.div1.scrollHeight
  }

  // 组件更新完毕的钩子
  componentDidUpdate(prevProps, prevState, height) {
    console.info('Count---componentDidUpdate', prevProps, prevState, height)
    this.div1.scrollTop += this.div1.scrollHeight - height
  }

  render() {
    return (
      <div className={css.list} ref={c => this.div1 = c}>
        {
          this.state.newArr.map(n => {
            return <div className={css.new} key={n}>{n}</div>
          })
        }
      </div>
    )
  }
}
