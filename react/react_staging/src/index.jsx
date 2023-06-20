import React, { Component } from "react";
import ReactDOM from "react-dom";

// const withSize = (Component) => {
//   return class toSize extends Component {
//     state = {
//       xPos: document.documentElement.clientWidth,
//       yPos: document.documentElement.clientHeight,
//     };

//     getPos = () => {
//       this.setState({
//         xPos: document.documentElement.clientWidth,
//         yPos: document.documentElement.clientHeight,
//       });
//     };

//     componentDidMount() {
//       window.addEventListener("resize", this.getPos);
//     }

//     componentWillUnmount() {
//       window.removeEventListener("resize", this.getPos);
//     }

//     render() {
//       return <Component {...this.state} />;
//     }
//   };
// };

//Sub组件
class Sub extends Component {
  state = {
    xPos: document.documentElement.clientWidth,
    yPos: document.documentElement.clientHeight,
  };

  getPos = () => {
    this.setState({
      xPos: document.documentElement.clientWidth,
      yPos: document.documentElement.clientHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.getPos);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getPos);
  }
  render() {
    return (
      <div>
        <button>
          x:{this.state.xPos} -- y:{this.state.yPos}
        </button>
      </div>
    );
  }
}
//Foo组件
class Foo extends Component {
  state = {
    xPos: document.documentElement.clientWidth,
    yPos: document.documentElement.clientHeight,
  };

  getPos = () => {
    this.setState({
      xPos: document.documentElement.clientWidth,
      yPos: document.documentElement.clientHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.getPos);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getPos);
  }
  render() {
    return (
      <div>
        <p>
          x:{this.state.xPos} -- y:{this.state.yPos}
        </p>
      </div>
    );
  }
}

// const SubWithSize = withSize(Sub);
// const FooWithSize = withSize(Foo);

class App extends Component {
  render() {
    return (
      <div>
        <Sub></Sub>
        <Foo></Foo>
      </div>
    );
  }
}

//渲染APP到页面
ReactDOM.render(<App />, document.getElementById("root"));
