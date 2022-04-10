import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.inputName.value
    const personObj = {id: nanoid(), name}
    this.props.add(personObj)
    this.inputName.value = ''
    console.info(personObj, 9)
  }
  render() {
    return (
      <div>
        <h2>Person组件{this.props.count}</h2>
        <input ref={c => this.inputName = c} type="text" placeholder='pelase input name' />
        <button onClick={this.addPerson}>add</button>
        <ul>
          {
            this.props.person.map(item => {
              return (<li key={item.id}>{item.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count,
    person: state.person
  }),
  {
    add: addPersonAction
  }
)(Person)