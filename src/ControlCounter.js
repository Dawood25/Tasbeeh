
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ControlCounter extends React.Component {
    render() {
      return (
        
        <center>
          <button  className="btn-primary btn"
            onClick={() => this.props.onClick()}
          >
            {this.props.count}
          </button>
          <button  className="btn-primary btn"
            onClick={() => this.props.onPClick()}
          >
            {this.props.label}
          </button>
          <button
            className="btn-primary btn"
            onClick={() => this.props.onIClick()}
          >
             Increase Speed
          </button>
          <button
            className="btn-primary btn"
            onClick={() => this.props.onDClick()}
          >
            Decrease Speed 
          </button>
        </center>
        
      );
    }
  }
  export default ControlCounter;