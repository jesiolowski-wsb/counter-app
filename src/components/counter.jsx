import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  getClassnames() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <>
        <span className={this.getClassnames()} style={this.styles}>
          {this.formatCount()}
        </span>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
