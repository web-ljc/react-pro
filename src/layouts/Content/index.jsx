import React, { Component, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

const Base = lazy(() => import('../../components/Base'))
const Routers = lazy(() => import('../../components/Router'))
const Antds = lazy(() => import('../../components/Antds'))
const Reduxs = lazy(() => import('../../components/Reduxs'))
const ReactReduxs = lazy(() => import('../../containers/ReactReduxs'))
const ReactReduxSimple = lazy(() => import('../../containers/ReactReduxSimple'))
const ReactReduxSimple2 = lazy(() => import('../../containers/ReactReduxSimple2'))
const ReactReduxCom = lazy(() => import('../../containers/ReactReduxCom'))
const ReactHook = lazy(() => import('../../components/ReactHook'))

export default class Content extends Component{
  render() {
    return(
      <Suspense fallback={<></>}>
        <Route path='/base' component={Base} />
        <Route path='/routers' component={Routers} />
        <Route path='/antds' component={Antds} />
        <Route path='/reduxs' component={Reduxs} />
        <Route path='/reactReduxs' component={ReactReduxs} />
        <Route path='/ReactReduxSimple' component={ReactReduxSimple} />
        <Route path='/ReactReduxSimple2' component={ReactReduxSimple2} />
        <Route path='/ReactReduxCom' component={ReactReduxCom} />
        <Route path='/ReactHook' component={ReactHook} />
      </Suspense>
    )
  }
}