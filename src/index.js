import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Draggable from 'react-draggable';

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

class ButtonLable extends React.Component {
  render() {
    const i = this.props.name;
    return (
      <button className="btn-success btn" onClick={() => this.props.onClick(i)}>
        {this.props.name}
      </button>
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
class Space extends React.Component {
  render() {
    return (
      <div>
        <br></br>
      </div>
    );
  }
}
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <center>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Ya Hasan"
                onClick={(i) => this.props.onClick(i)}
              ></ButtonLable>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Ya Husain"
                onClick={(i) => this.props.onClick(i)}
              ></ButtonLable>
            </div>
            <Space />
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Ya Ali"
                onClick={(i) => this.props.onClick(i)}
              ></ButtonLable>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Ya Fatema"
                onClick={(i) => this.props.onClick(i)}
              ></ButtonLable>
            </div>
            <Space />
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Ya Mohammad"
                onClick={(i) => this.props.onClick(i)}
              ></ButtonLable>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <ButtonLable
                name="Muffadal Mola"
                onClick={(i) => this.props.onClick(i)}
              />
            </div>
          </div>
        </center>
      </div>
    );
  }
}
class ControlCounter extends React.Component {
  render() {
    return (
      
      <center>
        <button  className="btn-primary btn"
          onClick={() => this.props.onClick()}
        >
          {this.props.count}
        </button>
        <button
          className="btn-primary btn"
          onClick={() => this.props.onIClick()}
        >
          Speed Increase
        </button>
        <button
          className="btn-primary btn"
          onClick={() => this.props.onDClick()}
        >
          Speed Decrease
        </button>
      </center>
      
    );
  }
}
class ManualCount extends React.Component{
  render(){return (
  <Draggable axis="both"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      onClick={()=>this.props.onClick()}>
        <button className="btn btn-primary handle" onClick={()=>this.props.onClick()}>
          click for Tasbeeh
        </button>
      </Draggable>);}
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
    };
  }

  handleClick(i) {
    this.setState({ name: i });
  }
  setTime() {
    this.setState({ count: this.state.count + 1 });
  }
  countClick() {
    if (this.state.counter === "Start") {
      this.setState({
        interval: setInterval(() => {
          this.setTime();
        }, this.state.speed * 500),
      });
    } else {
      clearInterval(this.state.interval);
      this.setState({interval:{}});
      this.setState({ count: 0 });
      this.setState({ flag: false });
    }
    this.setState({
      counter: this.state.counter === "Start" ? "End" : "Start",
    });
  }
  increaseSpeed() {
    if (this.state.speed > 1) {
      this.setState({ speed: this.state.speed - 1 });
      clearInterval(this.state.interval);
      this.setState({interval:{}});
      this.setState({
        interval: setInterval(() => {
          this.setTime();
        }, this.state.speed * 500),
      });
    }
  }
  decreaseSpeed() {
    this.setState({ speed: this.state.speed + 1 });
    clearInterval(this.state.interval);
    this.setState({interval:{}});
    this.setState({
      interval: setInterval(() => {
        console.log("new setinterval");
        this.setTime();
      }, this.state.speed * 500),
    });
  }
  increaseCount(){
    this.setState({count:this.state.count+1});
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
        />
        <ManualCount onClick={()=>this.increaseCount()}/>
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
