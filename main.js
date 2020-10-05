import { createElement, Component, render } from "./toy-react.js";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

// 将当前自定义的component给render到body之下
render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>,
  document.body
);
