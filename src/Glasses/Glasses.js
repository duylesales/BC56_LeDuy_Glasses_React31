import React, { Component } from "react";
import { listGlasses } from "./dataGlasses";

export default class Glasses extends Component {
  renderGlassItem = () => {
    return listGlasses.map((item, index) => {
      return (
        <div key={index} className="col-2">
          <div>
            <button>
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
    return (
      <div className="container">
        <div className="row">{this.renderGlassItem()}</div>
      </div>
    );
  }
}
