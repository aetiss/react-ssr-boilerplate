import React, { Component } from "react";
import { Link } from "react-router-dom";

class Collections extends Component {
  render() {
    return (
      <div className={"mb-5"}>
        <div className="row mt-3 ml-1">
          <h3>Collections</h3>
        </div>
        <div className="row d-flex justify-content-between mx-1">
          {this.props.collections.map((item, index) => {
            return (
              <Link to={`/collections/${item.id}`} className="card" key={item.name} style={{ width: "18rem" }}>
                <img className="card-img-top" src={item.image_url} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collections;
