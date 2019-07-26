import React, { Component } from "react";
import PropTypes from "prop-types";
class Welcome extends Component {
  static defaultProps = {
    name: "Harsha",
    age: 25
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.name},Welcome to React</h1>
        <p className="lead">your age is{this.props.age}</p>
      </div>
    );
  }
}

export default Welcome;
