import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAction } from '../../redux/actions/count'

class Count extends Component{
  handeleAdd = () => {
    this.props.addNum(1)
  }
  render() {
    return (
      <div>
        <h2>
          {this.props.sum}
        </h2>
        <button onClick={this.handeleAdd}>add</button>
      </div>
    )
  }
}

export default connect(
  state => ({sum: state.count}),
  {
    addNum: incrementAction
  }
)(Count)