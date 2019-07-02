import React, { Component } from "react";
import { Link } from "react-router-dom";

class TrendingProducts extends Component {
  render() {
    return (
      <div>
        <div className="row mt-3 ml-1">
          <h3>Trending Products</h3>
        </div>
        <div className="row d-flex justify-content-between mx-1">
          {this.props.trendingProducts.map((item, index) => {
            return (
              <Link to={`/products/${item.id}`} className="card" key={item.name} style={{ width: "18rem" }}>
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

export default TrendingProducts;
