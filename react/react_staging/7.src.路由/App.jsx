import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getData = () => {
    axios
      .post(
        "https://mockapi.eolinker.com/2nukssk5e6e5122aa7244a87924b3ee088ad60dd834ff1e/arrange/managerUpdate?username=3120004942&interviewId=1",
        {
          round: 1,
          time: "2021-9-15 15:00:00",
          location: "教五",
        }
      )
      .then(
        (response) => {
          console.log("成功了", response);
        },
        (error) => {
          console.log("失败了", error);
        }
      );
  };

  render() {
    return (
      <div>
        <button onClick={this.getData}>点我获取数据</button>
      </div>
    );
  }
}
