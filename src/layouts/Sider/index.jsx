import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'


const { SubMenu } = Menu

export default class Sider extends Component{
  handleClick = e => {
    console.info('click', e)
  } 
  render() {
    return(
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<SettingOutlined />} title="菜单栏">
            <Menu.Item key="1">
              <Link to='/routers'>
                router
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/antds'>
                antd
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/reduxs'>
                redux
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='/reactReduxs'>
                react-redux
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='/ReactReduxSimple'>
                react-redux(simple)
              </Link>
            </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}