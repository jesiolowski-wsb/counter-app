import React, { Component } from "react";

class Counter extends Component {
  getClassnames() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <>
        <span className={this.getClassnames()} style={this.styles}>
          {this.props.counter.value}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      </>
    );
  }

}

export default Counter;
