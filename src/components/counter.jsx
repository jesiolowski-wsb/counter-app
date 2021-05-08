import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  getClassnames() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        {this.props.children};
        <span className={this.getClassnames()} style={this.styles}>
          {this.state.value}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      </>
    );
  }

}

export default Counter;
