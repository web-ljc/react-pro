import React, { Component } from "react"
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Siders from "./layouts/Sider"
import Contents from "./layouts/Content"
import Headers from "./layouts/Header"
import './App.less'

const { Header, Sider, Content } = Layout;
export default class App extends Component{
  render() {
    return(
      <Layout className="site-layout">
        <BrowserRouter>
          <Sider width="256px" className="site-layout-background">
            <Siders />
          </Sider>
          <Layout>
            <Header className="site-layout-background">
              <Headers />
            </Header>
            <Content>
              <Contents />
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    )
  }
}
