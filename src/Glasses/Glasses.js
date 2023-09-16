import React, { Component } from "react";
import { listGlasses } from "./dataGlasses";

export default class Glasses extends Component {
  state = {
    url: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  handleChangeGlass = (url, name, desc) => {
    this.setState({ url: url });
    this.setState({ name: name });
    this.setState({ desc: desc });
  };

  renderGlassItem = () => {
    return listGlasses.map((item, index) => {
      return (
        <div key={index} className="col-2">
          <div>
            <button
              onClick={() => {
                this.handleChangeGlass(item.url, item.name, item.desc);
              }}
            >
              <img
                style={{ width: "130px", height: "50px" }}
                src={item.url}
                alt={item.name}
              />
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    let model = "./glassesImage/model.jpg";
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              style={{ height: "350px", position: "absolute" }}
              src={model}
              alt="Model"
            />
            <img
              style={{
                position: "relative",
                width: "180px",
                opacity: "0.8",
                marginTop: "85px",
                marginLeft: "55px",
              }}
              src={`${this.state.url}`}
            ></img>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#FF6666",
                height: "105px",
                opacity: "0.6",
                width: "288px",
                bottom: "0",
                left: "29.4%",
              }}
            >
              <h4 style={{ color: "darkcyan", opacity: "1" }}>
                {this.state.name}
              </h4>
              <h5 style={{ fontSize: "16px", color: "white" }}>
                {this.state.desc}
              </h5>
            </div>
          </div>
          <div className="col-6">
            <img style={{ height: "350px" }} src={model} />
          </div>
          <div
            className="col-12"
            style={{ backgroundColor: "white", marginTop: "50px" }}
          >
            <div
              className="row"
              style={{ height: "300px", alignContent: "space-around" }}
            >
              {this.renderGlassItem()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
