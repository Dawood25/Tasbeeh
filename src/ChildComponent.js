import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import  ButtonLable  from "../src/ButtonLable";
import Space from "../src/Space";

export default class ChildComponent extends React.Component {
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