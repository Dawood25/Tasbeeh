import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ControlCounter from "../src/ControlCounter";
import ChildComponent from "../src/ChildComponent";
import Draggable from "react-draggable";
import Space from "../src/Space";

class Header extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>{this.props.label}</h1>
        </center>
      </div>
    );
  }
}
class Selected extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h3 className="selected border- border-warning">
            {this.props.label}
          </h3>
        </center>
      </div>
    );
  }
}

class ButtonCounter extends React.Component {
  render() {
    return (
      <center>
        <button
          className="btn-primary btn"
          onClick={() => this.props.onClick()}
        >
          {this.props.count}
        </button>
      </center>
    );
  }
}

class ManualCount extends React.Component {
  render() {
    return (
      <center>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          onClick={() => this.props.onClick()}
        >
          <button
            className="btn btn-primary handle"
            onTouchStart={() => this.props.onClick()}
            onClick={() => this.props.onClick()}
          >
            click for Tasbeeh
          </button>
        </Draggable>
      </center>
    );
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ya Husain",
      count: 0,
      flag: true,
      counter: "Start",
      speed: 1,
      interval: {},
      pause: true,
      label: "Pause",
    };
  }

  handleClick(i) {
    clearInterval(this.state.interval);
    this.setState({ counter: "Start", name: i, count: 0, interval: {} });
    this.setState({ pause: true, label: "Pause",speed:1 });
  }
  setTime() {
    this.setState({ count: this.state.count + 1 });
  }
  countClick() {
    if (this.state.counter === "Start") {
      this.startTimer();
    } else {
      clearInterval(this.state.interval);
      this.setState({ interval: {} });
      this.setState({ count: 0 });
      this.setState({ flag: false });
    }
    this.setState({
      counter: this.state.counter === "Start" ? "End" : "Start",
    });
  }
  increaseSpeed() {
    if (this.state.counter === "Start" || this.state.label==="Resume") {
      return;
    }
    if (this.state.speed > 1) {
      this.setState({ speed: this.state.speed - 1 });
      clearInterval(this.state.interval);
      this.setState({ interval: {} });
      this.startTimer();
    } else {
      clearInterval(this.state.interval);
      this.setState({ interval: {} });
      this.setState({
        interval: setInterval(() => {
          this.setTime();
        }, this.state.speed * 250),
      });
    }
  }
  decreaseSpeed() {
    if (this.state.counter === "Start" || this.state.label==="Resume") {
      return;
    }
    this.setState({ speed: this.state.speed + 1 });
    clearInterval(this.state.interval);
    this.setState({ interval: {} });
    this.startTimer();
  }
  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  startTimer() {
    this.setState({
      interval: setInterval(() => {
        console.log("new setinterval");
        this.setTime();
      }, this.state.speed * 500),
    });
  }
  pauseClick() {
    if (this.state.counter === "Start") {
      return;
    }
    if (this.state.pause) {
      clearInterval(this.state.interval);
      this.setState({ interval: {} });
    } else {
      this.startTimer();
    }
    let pauseVal = this.state.pause === true ? false : true;
    let msg = pauseVal === false ? "Resume" : "Pause";
    this.setState({ pause: pauseVal, label: msg });
  }
  render() {
    const name1 = this.state.name;
    return (
      <div className="container">
        <Header label="Tasbeeh" />
        <Space />
        <ChildComponent onClick={(i) => this.handleClick(i)} />
        <Space />
        <Selected label={name1} />
        <ButtonCounter onClick={() => true} count={this.state.count} />
        <Space />
        <ControlCounter
          onIClick={() => this.increaseSpeed()}
          onDClick={() => this.decreaseSpeed()}
          onClick={() => this.countClick()}
          count={this.state.counter}
          speed={this.state.speed}
          label={this.state.label}
          onPClick={() => this.pauseClick()}
        />
        <ManualCount onClick={() => this.increaseCount()} />
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
