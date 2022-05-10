import React, {Component} from "react";

export default class NewComponent extends Component{
  render() {
    const MyCon = withFetch(DataList)
    return (
      <>
        <MyCon age={13} />
      </>
    )
  }
}

const DataList = (props) => {
  console.info(props, 7)
  return(
    <ul>
      { props.list.map(item => <li key={item}>{item}</li> ) }
    </ul>
  )
}

// withXxx高阶组件
const withFetch = (MyComponent) =>{
  return class extends Component{
    state = { list: [] }

    myFn = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([1, 2, 3, 4])
        }, 2000)
      })
    }

    async componentDidMount() {
      const list = await this.myFn()
      this.setState({ list })
    }

    render() {
      console.info(this.props, 888)
      return <MyComponent {...this.props} list={this.state.list} />
    }
  }
}

// export default withFetch(DataList)

