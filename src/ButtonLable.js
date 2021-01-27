import React from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class ButtonLable extends React.Component {
    render() {
      const i = this.props.name;
      return (
        <button className="btn-success btn" onClick={() => this.props.onClick(i)}>
          {this.props.name}
        </button>
      );
    }
  
}