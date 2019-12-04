import React, { Component } from "react";

export default class Square extends Component {
  render() {
    return (
      <button className="xs-square" onClick={() => this.props.Click()}>
        {this.props.Value}
      </button>
    );
  }
}
