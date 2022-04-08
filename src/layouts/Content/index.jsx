import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Routers from '../../components/Router'
import Antds from '../../components/Antds'
import Reduxs from '../../components/Reduxs'

export default class Content extends Component{
  render() {
    return(
      <>
        <Route path='/routers' component={Routers} />
        <Route path='/antds' component={Antds} />
        <Route path='/reduxs' component={Reduxs} />
      </>
    )
  }
}