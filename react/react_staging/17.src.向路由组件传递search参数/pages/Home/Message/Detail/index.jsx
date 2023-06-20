import React, { Component } from "react";
import qs from "querystring";

let obj = { name: "tom", age: "18" }; //想变成name=tom&age=18  key=value%key=value
console.log(qs.stringify(obj));

let str = "carName=奔驰&price=199"; //想变成{}
console.log(qs.parse(str));

const DetailData = [
  { id: "01", content: "你好中国" },
  { id: "02", content: "你好周晓峰" },
  { id: "03", content: "你好广东" },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 1.接收params参数
    // const { id, title } = this.props.match.params;

    // 2.接收search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));

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
