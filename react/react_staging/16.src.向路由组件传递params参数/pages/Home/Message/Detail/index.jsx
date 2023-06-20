import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "你好中国" },
  { id: "02", content: "你好周晓峰" },
  { id: "03", content: "你好广东" },
];

export default class Detail extends Component {
  render() {
    // 接收params参数
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
