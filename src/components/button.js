import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`column-${this.props.col}`}>
        <button
          className={`calc-button ${this.props.extra}`}
          onClick={() => this.props.action(this.props.symbol)}
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}
export default Buttons;
