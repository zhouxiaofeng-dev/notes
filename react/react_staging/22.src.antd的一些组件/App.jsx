import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import {
  WechatOutlined,
  WeiboOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <br />
        <Button type="primary">按钮1</Button>
        <br />
        <Button>按钮2</Button>
        <br />
        <Button type="link">按钮3</Button>
        <br />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <br />
        <WechatOutlined />
        <br />
        <WeiboOutlined />
        <br />
        <DatePicker />
        <br />
        <RangePicker />
      </div>
    );
  }
}
