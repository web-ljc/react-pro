import React, { Component } from "react";
import { Button } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import css from './index.module.css' 

export default class Hello extends Component{
  render() {
    return (
      <>
        <h2 className={css.title}>222</h2>
        <StarOutlined />
        <Button type="primary">3333</Button>
      </>
    )
  }
}