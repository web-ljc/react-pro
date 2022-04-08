import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
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
                路由1
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/antds'>
                antd2
              </Link>  
            </Menu.Item>
            <Menu.Item key="3">redux3</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}