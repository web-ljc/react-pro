import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'


const { SubMenu } = Menu

export default class Sider extends Component{
  state = {
    list: [
      {key: 1, link: '/routers', name: 'router'},
      {key: 2, link: '/antds', name: 'antd'},
      {key: 3, link: '/reduxs', name: 'redux'},
      {key: 4, link: '/reactReduxs', name: 'react-redux'},
      {key: 5, link: '/ReactReduxSimple', name: 'react-redux(simple)'},
      {key: 6, link: '/ReactReduxSimple2', name: 'react-redux(simple2)'},
      {key: 7, link: '/ReactReduxCom', name: 'react-redux(Com)'},
    ]
  }
  handleClick = e => {
    console.info('click', e)
  } 
  render() {
    return(
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={[1]}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<SettingOutlined />} title="菜单栏">
            {
              this.state.list.map(item => {
                return (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                )
              })
            }
        </SubMenu>
      </Menu>
    )
  }
}