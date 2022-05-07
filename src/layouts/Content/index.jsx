import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Base from '../../components/Base'
import Routers from '../../components/Router'
import Antds from '../../components/Antds'
import Reduxs from '../../components/Reduxs'
import ReactReduxs from '../../containers/ReactReduxs'
import ReactReduxSimple from '../../containers/ReactReduxSimple'
import ReactReduxSimple2 from '../../containers/ReactReduxSimple2'
import ReactReduxCom from '../../containers/ReactReduxCom'
import ReactHook from '../../components/ReactHook'

export default class Content extends Component{
  render() {
    return(
      <>
        <Route path='/base' component={Base} />
        <Route path='/routers' component={Routers} />
        <Route path='/antds' component={Antds} />
        <Route path='/reduxs' component={Reduxs} />
        <Route path='/reactReduxs' component={ReactReduxs} />
        <Route path='/ReactReduxSimple' component={ReactReduxSimple} />
        <Route path='/ReactReduxSimple2' component={ReactReduxSimple2} />
        <Route path='/ReactReduxCom' component={ReactReduxCom} />
        <Route path='/ReactHook' component={ReactHook} />
      </>
    )
  }
}