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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getClassnames()}>{this.formatCount()}</span>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h4>zero</h4> : count;
  }
}

export default Counter;
