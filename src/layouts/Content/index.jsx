import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Routers from '../../components/Router'
import Antds from '../../components/Antds'
import Reduxs from '../../components/Reduxs'
import ReactReduxs from '../../containers/ReactReduxs'
import ReactReduxSimple from '../../containers/ReactReduxSimple'

export default class Content extends Component{
  render() {
    return(
      <>
        <Route path='/routers' component={Routers} />
        <Route path='/antds' component={Antds} />
        <Route path='/reduxs' component={Reduxs} />
        <Route path='/reactReduxs' component={ReactReduxs} />
        <Route path='/ReactReduxSimple' component={ReactReduxSimple} />
      </>
    )
  }
}